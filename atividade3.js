import React, { useState } from 'react';
import './Contador.css';
import imagemHomem from './Imagens/homem.webp';
import ImagemMulher from './Imagens/mulher.jpg';

function ContadorPessoas() {
	const [total, setTotal] = useState(0);
	const [homens, setHomens] = useState(0);
	const [mulheres, setMulheres] = useState(0);

	const AddPerson = (gender) => {
		if (gender === 'homens') {
			setHomens(homens + 1);
			setTotal(total + 1);
		} else if (gender === 'mulheres') {
			setMulheres(mulheres + 1);
			setTotal(total + 1);
		}
	};

	const RemovePerson = (gender) => {
		if (gender === 'homens' && homens > 0) {
			setHomens(homens - 1);
			setTotal(total - 1);
		} else if (gender === 'mulheres' && mulheres > 0) {
			setMulheres(mulheres - 1);
			setTotal(total - 1);
		}
	};

	const Refresh = () => {
		setTotal(0);
		setHomens(0);
		setMulheres(0);
	};

	const isNegative = total < 0;

	return (
		<div className='container'>
			<h1>Total: {total}</h1>
			{isNegative && <p style={{ color: 'red' }}>Número total de pessoas não pode ser negativo</p>}
			<div class='buttons-container'>
				<img class="img" src={imagemHomem} alt={'Homem'} />
				<h2>Homens: {homens}</h2>
				<button class="botao" onClick={() => AddPerson('homens')}>+</button>
				<button class="botao" onClick={() => RemovePerson('homens')}>-</button>
			</div>
			<div class='buttons-container'>
				<img class="img" src={ImagemMulher} alt={'Mulher'} />
				<h2>Mulheres: {mulheres}</h2>
				<button class="botao" onClick={() => AddPerson('mulheres')}>+</button>
				<button class="botao" onClick={() => RemovePerson('mulheres')}>-</button>
			</div>
			<button className='refresh-button' onClick={Refresh}>Limpar</button>
		</div>
	);
}

export default ContadorPessoas;
