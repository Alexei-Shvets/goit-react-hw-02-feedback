import propTypes from 'prop-types';

export default function Statistics({
good,
neutral,
bad,
total,
positiveTotal,
}) {
return (
    <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positiveTotal}%</li>
    </ul>
);
}

Statistics.propTypes = {
good: propTypes.number.isRequired,
neutral: propTypes.number.isRequired,
bad: propTypes.number.isRequired,
//total: propTypes.number.isRequired,
// positiveTotal: propTypes.number.isRequired,
};