import React, { useEffect, useState, useContext } from 'react';
import { Typography, Paper, Collapse, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
// import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
// import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
// import RestartAltRoundedIcon from '@mui/icons-material/RestartAltRounded';


const Alert = ({ text, type, onOpen }) => {
    //? state
    const [updateOpen, setUpdateOpen] = useState(true)


    useEffect(() => {
        setUpdateOpen(true)
    }, [onOpen])


    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setUpdateOpen(false);
            onOpen = false;
        }, 5000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [onOpen]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
        >
            <Collapse in={updateOpen}>
                {
                    type === 'success' &&
                    <Paper className='success font-size-14'
                        style={{ marginBottom: 100 }}>
                        <Typography className='font-size-14' style={{ display: 'flex', alignItems: 'center' }}>
                            {/* <CheckCircleRoundedIcon style={{ marginRight: '5px' }} /> */}
                            {text}
                        </Typography>
                    </Paper>

                }

                {
                    type === 'processing' &&
                    <Paper className='processing font-size-14'
                        style={{ marginBottom: 100 }}>
                        <Typography className='font-size-14' style={{ display: 'flex', alignItems: 'center' }}>
                            {/* <RestartAltRoundedIcon style={{ marginRight: '5px' }} /> */}
                            {text}
                        </Typography>
                    </Paper>
                }

                {
                    type === 'error' &&
                    <Paper className='err font-size-14'
                        style={{ marginBottom: 100 }}>
                        <Typography className='font-size-14' style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                            {/* <CancelRoundedIcon style={{ marginRight: '5px' }} /> */}
                            Fatal Error Occurred:
                        </Typography>
                        <Typography className='font-size-14' style={{ textAlign: 'left' }}>
                            {text}
                        </Typography>
                    </Paper>
                }

            </Collapse>
        </motion.div>
    );
}

export default Alert
