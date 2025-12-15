import { useState, useEffect } from 'react';
import './IdeIcon.css';

/**
 * IdeIcon component - JetBrains IDE icon
 * Uses SVG/PNG files from icons/ide_logos when available,
 * falls back to CSS gradient approach otherwise.
 * 
 * @param {Object} props
 * @param {string} [props.product='IDEA Ultimate'] - The IDE product
 * @param {'16'|'24'|'32'|'48'|'64'|'128'|'256'|'512'} [props.size='16'] - Icon size
 * @param {'Windows'|'macOS'} [props.os='Windows'] - Operating system style
 * @param {string} [props.className] - Additional CSS classes
 */
function IdeIcon({
    product = 'IDEA Ultimate',
    size = '16',
    os = 'Windows',
    className = '',
    ...props
}) {
    const sizeNum = parseInt(size, 10);
    const [iconSrc, setIconSrc] = useState(null);
    const [loadError, setLoadError] = useState(false);

    // Try to load the icon from ide_logos folder
    useEffect(() => {
        const loadIcon = async () => {
            // Try SVG first, then PNG
            const extensions = ['svg', 'png'];
            
            for (const ext of extensions) {
                try {
                    const iconModule = await import(`../../icons/ide_logos/Product=${product}, Size=${size}, OS=${os}.${ext}`);
                    setIconSrc(iconModule.default);
                    setLoadError(false);
                    return;
                } catch (e) {
                    // Continue to next extension
                }
            }
            
            // No icon found, use fallback
            setLoadError(true);
        };

        loadIcon();
    }, [product, size, os]);

    // Product configurations for fallback: gradient and letters
    const productConfig = {
        'IDEA Ultimate': {
            gradient: 'linear-gradient(135deg, #FC801D 0%, #FE315D 35%, #FE315D 65%, #087CFA 100%)',
            letters: 'IJ'
        },
        'IDEA Community': {
            gradient: 'linear-gradient(135deg, #FC801D 0%, #FE315D 100%)',
            letters: 'IJ'
        },
        'PyCharm Pro': {
            gradient: 'linear-gradient(135deg, #21D789 0%, #07C3F2 100%)',
            letters: 'PC'
        },
        'PyCharm Community': {
            gradient: 'linear-gradient(135deg, #21D789 0%, #FCEE45 100%)',
            letters: 'PC'
        },
        'WebStorm': {
            gradient: 'linear-gradient(135deg, #07C3F2 0%, #087CFA 50%, #6B57FF 100%)',
            letters: 'WS'
        },
        'PhpStorm': {
            gradient: 'linear-gradient(135deg, #B345F1 0%, #765AF8 50%, #FF318C 100%)',
            letters: 'PS'
        },
        'RubyMine': {
            gradient: 'linear-gradient(135deg, #FE2857 0%, #FE575E 50%, #FF318C 100%)',
            letters: 'RM'
        },
        'GoLand': {
            gradient: 'linear-gradient(135deg, #0D7377 0%, #07C3F2 50%, #6B57FF 100%)',
            letters: 'GO'
        },
        'CLion': {
            gradient: 'linear-gradient(135deg, #21D789 0%, #009AE5 50%, #B345F1 100%)',
            letters: 'CL'
        },
        'DataGrip': {
            gradient: 'linear-gradient(135deg, #22D88F 0%, #9775F8 100%)',
            letters: 'DG'
        },
        'DataSpell': {
            gradient: 'linear-gradient(135deg, #21D789 0%, #07C3F2 100%)',
            letters: 'DS'
        },
        'Rider': {
            gradient: 'linear-gradient(135deg, #C90F5E 0%, #EE275E 50%, #FCDB32 100%)',
            letters: 'RD'
        },
        'RustRover': {
            gradient: 'linear-gradient(135deg, #FC801D 0%, #FE4F23 100%)',
            letters: 'RR'
        },
        'Aqua': {
            gradient: 'linear-gradient(135deg, #087CFA 0%, #6B57FF 50%, #FE318C 100%)',
            letters: 'QA'
        },
        'Writerside': {
            gradient: 'linear-gradient(135deg, #21D789 0%, #078C5B 100%)',
            letters: 'WR'
        },
        'Gateway': {
            gradient: 'linear-gradient(135deg, #7B4DFF 0%, #B345F1 100%)',
            letters: 'GW'
        },
        'CLion Nova': {
            gradient: 'linear-gradient(135deg, #21D789 0%, #009AE5 50%, #B345F1 100%)',
            letters: 'CL'
        },
        'Client': {
            gradient: 'linear-gradient(135deg, #7B4DFF 0%, #B345F1 100%)',
            letters: 'JC'
        },
        'IJ Platform': {
            gradient: 'linear-gradient(135deg, #6B57FF 0%, #FE318C 50%, #FC801D 100%)',
            letters: 'IJ'
        }
    };

    const getProductGradient = () => {
        return productConfig[product]?.gradient || productConfig['IDEA Ultimate'].gradient;
    };

    const getProductLetters = () => {
        return productConfig[product]?.letters || 'IJ';
    };

    // If we have an icon source, render the image
    if (iconSrc && !loadError) {
        return (
            <div 
                className={`ide-icon ${className}`}
                style={{ width: sizeNum, height: sizeNum }}
                {...props}
            >
                <img 
                    src={iconSrc} 
                    alt={`${product} icon`}
                    className="ide-icon-image"
                    width={sizeNum}
                    height={sizeNum}
                />
            </div>
        );
    }

    // Fallback: CSS-based gradient icon
    const isMacOS = os === 'macOS';
    const logoInset = isMacOS ? (sizeNum <= 16 ? 0 : sizeNum * 0.0977) : 0;
    const logoSize = sizeNum - (logoInset * 2);
    const innerBoxSize = logoSize * 0.64;
    const innerBoxOffset = (logoSize - innerBoxSize) / 2 + logoInset;
    
    const getFontSize = () => {
        if (sizeNum <= 16) return 5;
        if (sizeNum <= 24) return 7;
        if (sizeNum <= 32) return 9;
        if (sizeNum <= 48) return 14;
        if (sizeNum <= 64) return 18;
        if (sizeNum <= 128) return 36;
        if (sizeNum <= 256) return 72;
        return 144;
    };

    const getUnderscoreWidth = () => {
        if (sizeNum <= 16) return '35%';
        if (sizeNum <= 32) return '35%';
        return '30%';
    };

    return (
        <div 
            className={`ide-icon ide-icon-${os.toLowerCase()} ide-icon-fallback ${className}`}
            style={{ 
                width: sizeNum, 
                height: sizeNum,
                borderRadius: isMacOS && sizeNum >= 512 ? sizeNum * 0.176 : undefined
            }}
            {...props}
        >
            <div 
                className="ide-icon-logo"
                style={{
                    background: getProductGradient(),
                    top: logoInset,
                    left: logoInset,
                    right: logoInset,
                    bottom: logoInset,
                    borderRadius: isMacOS 
                        ? (sizeNum <= 16 ? 2 : sizeNum * 0.172)
                        : (sizeNum <= 16 ? 2 : sizeNum * 0.1),
                }}
            />
            <div 
                className="ide-icon-inner"
                style={{
                    width: innerBoxSize,
                    height: innerBoxSize,
                    top: innerBoxOffset,
                    left: innerBoxOffset,
                    borderRadius: sizeNum <= 16 ? 1 : Math.max(2, sizeNum * 0.05),
                }}
            >
                <span 
                    className="ide-icon-letters"
                    style={{ fontSize: getFontSize() }}
                >
                    {getProductLetters()}
                </span>
                <span 
                    className="ide-icon-underscore"
                    style={{ 
                        width: getUnderscoreWidth(),
                        height: sizeNum <= 16 ? 1 : Math.max(1.5, sizeNum * 0.03),
                    }}
                />
            </div>
        </div>
    );
}

export default IdeIcon;
