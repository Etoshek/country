import { useEffect, useState } from 'react';
import Inputs from './components/Inputs';
import Table from './components/Table';
import { DataProps } from './helpers/types';

function App() {
	const [countryValue, setCountry] = useState<string>('');
	const [capitalValue, setCapital] = useState<string>('');
	const [languageValue, setLanguage] = useState<string>('');
	const [error, setError] = useState<boolean>(false);
	const [itemsList, setItemsList] = useState<DataProps[]>([]);
	const [deleteItem, setDeleteItem] = useState<DataProps[]>([]);
	const [open, setOpen] = useState(false);



	const handleCountry = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCountry(event.target.value);
		setError(false);
	};

	const handleCapital = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCapital(event.target.value);
		setError(false);
	};
	const handleLanguage = (event: React.ChangeEvent<HTMLInputElement>) => {
		setLanguage(event.target.value);
		setError(false);
	};

	const addItemToList = (newItem: DataProps) => {
		setItemsList((prevItemList) => [...prevItemList, newItem]);
	};

	const handleButtonClick = () => {
		if (
			countryValue.trim() === '' ||
			capitalValue.trim() === '' ||
			languageValue.trim() === ''
		) {
			setError(true);
		} else {
			addItemToList({
				country: countryValue,
				capital: capitalValue,
				language: languageValue,
			});
			setCountry('');
			setCapital('');
			setLanguage('');
			setError(false);
		}
	};

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	useEffect(()=>{()},[ ])


	// const handleDelete = (country: string) => {
	// 	const deleteItem = itemsList.filter(
	// 		(row: { country: string }) => row.country !== country
	// 	);
	// 	setDeleteItem(deleteItem);
	// };

	const handleDelete = (countryToDelete: string) => {
		const deleteItem = itemsList.filter(
			(row) => row.country && row.capital && row.language !== countryToDelete
		);
		// {row.country} - {row.capital} - {row.language}

		setDeleteItem(deleteItem);
	};
	useEffect(() => {
		setDeleteItem(deleteItem);
	}, [deleteItem]);
  
	useEffect(() => {
		console.log('deleteItem:', deleteItem);
	}, [deleteItem]);

	return (
		<>
			<Inputs
				country={countryValue}
				capital={capitalValue}
				language={languageValue}
				{...{
					handleButtonClick,
					handleCountry,
					handleCapital,
					handleLanguage,
					error,
				}}
			/>
			<Table
				rows={itemsList}
				{...{ handleClickOpen, handleClose, handleDelete, open, deleteItem }}
			/>
		</>
	);
}

export default App;
