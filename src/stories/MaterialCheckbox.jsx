import React, { Fragment } from "react";
import { Checkbox, FormControlLabel } from "@material-ui/core";


export const MaterialCheckBox = (props) => {
    const [checked, setChecked] = React.useState(true);

    return <Fragment>
        <FormControlLabel control={<Checkbox
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            inputProps={{
                'aria-label': 'secondary checkbox'
            }}
        />}
            label="Testing Checkbox" />
    </Fragment>
}