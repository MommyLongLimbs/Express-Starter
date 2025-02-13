import React, { useEffect, useContext, useState } from 'react';
import { useWindowSize } from "@uidotdev/usehooks";
import ItemContext from '../context/items/itemContext';
import VirtualizedList from '../components/VirtualizedList';
import { TextField, Grid, Typography } from '@mui/material';
import '../assets/CSS/css.css'


function Items() {
    //? gets size of window
    const size = useWindowSize();


    //? items context
    const itemContext = useContext(ItemContext);
    const { getItems, items, searchItem } = itemContext


    //? state
    const [formData, setFormData] = useState({});


    //? on change functions
    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }


    //? get all items
    useEffect(() => {
        getItems();
    }, [])


    //? useeffect for logging
    useEffect(() => {
        // console.log(items)
    })


    //? on submit function
    const onSubmit = e => {
        e.preventDefault();
        console.log(formData)
    }



    return (
        <div style={{ textAlign: 'center', width: size.width }}>
            <div style={{ marginTop: 20, marginRight: 30 }}>
                <Grid container>





                    {/* //? search */}
                    {/* //? search */}
                    {/* //? search */}
                    <form onSubmit={onSubmit}>
                        <Grid item sm={12} md={12} lg={6} className='margin5'>
                            <TextField
                                name='name'
                                placeholder='search...'
                                size='small'
                                onChange={onChange}>
                            </TextField>
                        </Grid>
                    </form>
                    {/* //? search */}
                    {/* //? search */}
                    {/* //? search */}




                    {/* //? items */}
                    {/* //? items */}
                    {/* //? items */}
                    <Grid item sm={12} md={12} lg={6}>
                        {
                            items?.length > 0
                                ? <VirtualizedList options={items} />
                                : <Typography>No items are found</Typography>
                        }
                    </Grid>
                    {/* //? items */}
                    {/* //? items */}
                    {/* //? items */}



                </Grid>
            </div>
        </div>
    )
}

export default Items;