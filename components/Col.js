import classNames from 'classnames/bind'
import styles from './col.module.scss';

let cx = classNames.bind(styles);

const Col = ({children, width}) => {
    let columnClasses = cx({
        col: true,
        [`col-${width}`]: width
    });
    return <div className={columnClasses}>{children}</div>
}
export default Col