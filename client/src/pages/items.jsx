import React, { useEffect, useContext, useState } from 'react';
import { useWindowSize } from "@uidotdev/usehooks";
import ItemContext from '../context/items/itemContext';
import VirtualizedList from '../components/VirtualizedList';
import { TextField, Grid, Typography, Button } from '@mui/material';
import '../assets/CSS/css.css'


function Items() {
    //? gets size of window
    const size = useWindowSize();


    //? items context
    const itemContext = useContext(ItemContext);
    const { getItems, items, searchItem, item } = itemContext


    //? state
    const [formData, setFormData] = useState({});
    const [searchList, setSearchList] = useState([]);


    //? on change functions
    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }


    //? get all items
    useEffect(() => {
        getItems();
    }, [])


    //? check if there is an item then update searchList
    useEffect(() => {
        item?.length > 0 && setSearchList(item)
    }, [item])


    //? useeffect for logging
    useEffect(() => {
        console.log(searchList)
    })


    //? on submit function
    const onSubmit = e => {
        e.preventDefault();
        searchItem(formData)
    }



    return (
        <div style={{ textAlign: 'center', width: size.width }}>
            <div style={{ marginTop: 20, marginRight: 30 }}>
                <Grid container className='margin5'>





                    {/* //? search */}
                    {/* //? search */}
                    {/* //? search */}
                    <form onSubmit={onSubmit}>
                        <Grid item sm={12} md={12} lg={6} className='margin5'>
                            <TextField
                                autocomplete="on"
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






                    {/* //? clear btn */}
                    {/* //? clear btn */}
                    {/* //? clear btn */}
                    <Button className='margin5' onClick={() => setSearchList([])}>Clear</Button>
                    {/* //? clear btn */}
                    {/* //? clear btn */}
                    {/* //? clear btn */}





                    <Grid item md={12}>
                        <Typography style={{ float: 'left', color: '#c7c8c9' }} className='font-size-12'>search is not case sensitive</Typography>
                    </Grid>




                    {/* //? items */}
                    {/* //? items */}
                    {/* //? items */}
                    {
                        searchList?.length > 0
                            ? <Grid item sm={12} md={12} lg={6}>
                                {
                                    item?.length > 0
                                        ? <VirtualizedList options={item} />
                                        : <Typography>No items are found</Typography>
                                }
                            </Grid>
                            : <Grid item sm={12} md={12} lg={6}>
                                {
                                    items?.length > 0
                                        ? <VirtualizedList options={items} />
                                        : <Typography>No items are found</Typography>
                                }
                            </Grid>
                    }
                    {/* //? items */}
                    {/* //? items */}
                    {/* //? items */}



                </Grid>
            </div>
        </div>
    )
}

export default Items;