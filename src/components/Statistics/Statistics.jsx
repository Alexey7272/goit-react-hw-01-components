import PropTypes from 'prop-types'
import css from './Statistics.module.css'
import getRandomHexColor from 'utils/RandomColor.js'

export const Data = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}

            <ul className={css.stat_list}>
                {stats.map(({ id,label,percentage }) =>
                    <li key={id} className={css.item} style={{backgroundColor: getRandomHexColor() }}>
                       <span className={css.label}>{label}</span>
                       <span className={percentage}>{percentage}%</span>
                    </li>
                )}
            </ul>
        </section>
    );
};


Data.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf( PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })).isRequired,
};