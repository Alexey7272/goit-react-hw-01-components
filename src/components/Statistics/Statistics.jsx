import PropTypes from 'prop-types'
import css from './Statistics.module.css'
import getRandomHexColor from 'utils/RandomColor.js'
import Datacleaner from 'utils/datacleaner';
import stat from './data.json'

const cleanData = Datacleaner(stat)

export const Data = ({ title }) => {
    return (
        <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}

            <ul className={css.stat_list}>
                {cleanData.map(stat => 
                    <li key={stat.id} className={css.item} style={{backgroundColor: getRandomHexColor() }}>
                       <span className={css.label}>{stat.label}</span>
                       <span className={css.percentage}>{stat.percentage}</span>
                    </li>
                )}
            </ul>
        </section>
    );
};


Data.propTypes = {
    title: PropTypes.string
};