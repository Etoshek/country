import React from 'react';
import Dialog from './Dialog';
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DataProps } from '../helpers/types';
import { Button } from '@mui/material';

interface TableProps {
	rows: DataProps[];
	open: boolean;
	handleClickOpen: (e: any) => void;
	handleClose: (e: any) => void;
	handleDelete: (e: any) => void;
}

const Table: React.FC<TableProps> = ({
	rows,
	open,
	handleClickOpen,
	handleClose,
	handleDelete,
}) => {
	return (
		<TableContainer component={Paper}>
			<MuiTable sx={{ minWidth: 650 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell>Kraj </TableCell>
						<TableCell align='right'>Stolica</TableCell>
						<TableCell align='right'>Język urzędowy</TableCell>
						<TableCell align='right'></TableCell>
						<TableCell align='right'></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow
							key={row.country}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell component='th' scope='row'>
								{row.country}
							</TableCell>
							<TableCell align='right'>{row.capital}</TableCell>
							<TableCell align='right'>{row.language}</TableCell>
							<TableCell align='right'>
								<Button onClick={handleClickOpen}>Edytuj</Button>
							</TableCell>

							<TableCell align='right' key={row.country}>
								
									<Button onClick={ handleDelete}>Usuń</Button>
					
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</MuiTable>
			<Dialog {...{ open, handleClose }} />
		</TableContainer>
	);
};


// {rows.map((row) => (
//     <ul key={row.country}>
//         {/* {row.country} -{row.capital} - {row.language} */}
//         <Button onClick={() => handleDelete(row.country)}>
//             Usuń
//         </Button>
//     </ul>
// ))}

export default Table;
