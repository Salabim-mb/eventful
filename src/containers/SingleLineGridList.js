import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from '@material-ui/icons/Clear';

export const SingleLineGridList = ({data, theme, onPhotoClick}) => (
    <div className={theme.root}>
        <GridList className={theme.gridList} cols={2.5}>
            {data.map((tile) => (
                <GridListTile key={tile.img}>
                    <img src={tile?.img} alt={tile?.title} />
                    <GridListTileBar
                        title={tile?.title}
                        classes={{
                            root: theme.titleBar,
                            title: theme.title
                        }}
                        actionIcon={
                            <IconButton aria-label={`delete ${tile}`} onClick={() => onPhotoClick(tile.id)}>
                                <ClearIcon />
                            </IconButton>
                        }
                    />
                </GridListTile>
            ))}
        </GridList>
    </div>
);