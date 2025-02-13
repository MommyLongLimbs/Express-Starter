import React, { useEffect } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';
import { Typography } from '@mui/material';

const VirtualizedList = ({ options, onSelect }) => {


    const handleOptionClick = (option) => {
        onSelect(option);
    };


    //? useeffect for logging
    useEffect(() => {
        // console.log(options)
    })


    return (
        <div style={{ height: 400, width: '100%' }}>
            <AutoSizer>
                {({ height, width }) => (
                    <List
                        height={height}
                        width={width}
                        itemCount={options.length}
                        itemSize={50}
                    >
                        {({ index, style }) => {
                            const option = options[index];
                            return (
                                <div
                                    key={option.id || index}
                                    style={{
                                        ...style,
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '0 10px',
                                        borderBottom: '1px solid #ccc',
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => handleOptionClick(option)}
                                >
                                    <Typography>{option.name}</Typography>
                                </div>
                            );
                        }}
                    </List>
                )}
            </AutoSizer>
        </div>
    );
};

export default VirtualizedList;
