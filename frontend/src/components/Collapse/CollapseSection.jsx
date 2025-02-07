import { collapseArray } from "./Data";
import Collapse from "./Collapse";

import "./collapseSection.css"

const CollapseSection = () => {
    return (
        <section className="section-collapse">
            {collapseArray.map((collapse) => (
                <Collapse key={collapse.id} title={collapse.title}>
                {collapse.content}
            </Collapse>
            ))}
        </section>
    );
};

export default CollapseSection;