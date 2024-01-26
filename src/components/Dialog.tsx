import * as React from 'react';
import Button from '@mui/material/Button';
import MuiDialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import { Box, TextField } from '@mui/material';

interface DialogProps {
	handleClose: (e: any) => void;
	open: boolean;
    
}

export default function Dialog({ handleClose, open }: DialogProps) {
	return (
		<React.Fragment>
			{open && (
				<MuiDialog
					open={open}
					onClose={handleClose}
					aria-labelledby='alert-dialog-title'
					aria-describedby='alert-dialog-description'
				>
					<Box
						component='form'
						sx={{
							'& .MuiTextField-root': { m: 1, width: '25ch' },
						}}
						noValidate
						autoComplete='off'
					>
					<h1>Edytuj kraj</h1>
						<TextField type='text' placeholder='Zmień nazwę kraju'/>
						<TextField type='text' placeholder='Zmień nzawę stolicy'/>
						<TextField type='text' placeholder='Zmień język urzędowy'/>
					</Box>

					<DialogActions>
						<Button>Zapisz</Button>
						<Button onClick={handleClose}>Anuluj</Button>
					</DialogActions>
				</MuiDialog>
			)}
		</React.Fragment>
	);
}
