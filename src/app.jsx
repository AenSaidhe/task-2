import styles from './app.module.css';
import data from './data.json';
import {useState} from "react";

export const App = () => {
	// Можно задать 2 состояния — steps и activeIndex
	const [steps, setSteps] = useState(data)
	const [activeIndex, setActiveIndex] = useState(1);

	const arr = steps.filter(item => +item.id === activeIndex);

	const handlePrevious = () => {
		setActiveIndex(activeIndex - 1)
	}

	const handleNext = () => {
		setActiveIndex(activeIndex + 1)
		if (activeIndex === steps.length) {
			setActiveIndex(1)
		}
	}

	return (
		<div className={styles.container}>
			<div >
				<h1>Инструкция по готовке пельменей</h1>
				<div className={""}>
					<div className={styles['steps-content']}>
						{
							arr.map((item) => (
								<div key={item.id}>
									<h3>{ item.title }</h3>
									<p>{ item.content }</p>
								</div>
							))
						}

					</div>
					<ul className={styles['steps-list']}>
						{
							steps.map((item) => (
								<li key={+item.id} className={ activeIndex === +item.id ? styles['steps-item'] + ' ' + styles.active : styles['steps-item'] }>
									<button onClick={() => setActiveIndex(+item.id)}
										className={ styles['steps-item-button'] }>{ +item.id }</button>
									Шаг { +item.id }
								</li>
							))
						}
					</ul>
					<div className={styles['buttons-container']}>
						<button className={styles.button} disabled={activeIndex < 2 && true } onClick={handlePrevious}>Назад</button>
						<button className={styles.button} onClick={handleNext}>
							{ activeIndex < steps.length ? "Далее" : "Начать сначала" }
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
