import { Link } from 'react-router-dom';
import './Home.css';
import { getSortedComponentsOnly } from './componentsConfig';

function Home() {
    const categories = [
        {
            name: 'Styles',
            description: 'Design tokens and foundational styles',
            pages: [
                { name: 'Typography', key: 'typography', description: 'Text styles for UI and editor' },
                { name: 'Colors', key: 'colors', description: 'Color scales and palettes' }
            ]
        },
        {
            name: 'Components',
            description: 'Interactive UI components',
            pages: getSortedComponentsOnly()
        }
    ];

    return (
        <div className="component-showcase">
            <h1>Component Library</h1>
            
            <div className="home-intro">
                <p>This library contains reusable UI components and design tokens for building consistent interfaces.</p>
            </div>

            <div className="home-categories">
                {categories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="home-category">
                        <div className="home-category-header">
                            <h2 className="home-category-title">{category.name}</h2>
                            <p className="home-category-description">{category.description}</p>
                        </div>
                        
                        <div className="home-pages">
                            {category.pages.map((page, pageIndex) => (
                                <Link 
                                    key={pageIndex} 
                                    to={`/${page.key}`}
                                    className="home-page-card"
                                >
                                    <h3 className="home-page-title">{page.name}</h3>
                                    <p className="home-page-description">{page.description}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
