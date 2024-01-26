import { Box, TextField } from '@mui/material';

import { DataProps } from '../helpers/types';

interface InputsProps extends DataProps {
	handleButtonClick: () => void;
	handleCountry: (e: any) => void;
	handleCapital: (e: any) => void;
	handleLanguage: (e: any) => void;
	error: boolean;
}

const Inputs = ({
	country,
	capital,
	language,
    handleButtonClick,
	handleCountry,
	handleCapital,
	handleLanguage,
	error,
}: InputsProps) => {
    return (
        <section id='player'>
			<button onClick={handleButtonClick}>Zapisz</button>
			<Box
				component='form'
				sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
				}}
				noValidate
				autoComplete='off'
                >
				<TextField
					type='text'
					value={country}
					onChange={handleCountry}
					placeholder='Wpisz nazwę Kraju'
					error={error}
					helperText={error ? 'Wpisz nazwę Kraju' : ''}
                    />
				<TextField
					type='text'
					value={capital}
					onChange={handleCapital}
					placeholder='Wpisz stolicę kraju'
					error={error}
					helperText={error ? 'Wpisz stolicę kraju' : ''}
                    />
				<TextField
					type='text'
					value={language}
					onChange={handleLanguage}
					placeholder='Wpisz język urzędowy'
					error={error}
					helperText={error ? 'Wpisz język urzędowy' : ''}
				/>
			
			</Box>
		</section>
	);
};

export default Inputs;
