import PropTypes from 'prop-types';
import css from './Statistics.module.css';

//створюємо функцію для генерації рандомного кольору
function getRandomHexColor() {
  let bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return bgColor;
}

//створюємо компонент Statistics
export const Statistics = ({ title, stats }) => (
  <div className={css.statisticsContainer}>
    {/*створюємо контейнер*/}
    <section className={css.statistics}>
      {/*зазначаємо що якщо немає title то не виводимо його*/}
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {/*перебираємо масив для створення списку елементів*/}
        {stats.map(stat => (
          <li
            className={title ? css.statListItem : css.statListItemNoTitle}
            style={{
              backgroundColor: getRandomHexColor(),
            }}
            key={stat.id}
          >
            {/*додаємо кожному елементу id*/}
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  </div>
);

//зазначаємо типи пропсів
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
