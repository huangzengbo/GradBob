import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { iUser } from '../../types/user';

export interface UsersProps {
    users: iUser[];
    actionSelectUserId: (userId: number) => void;
}

export default function UsersView({ users, actionSelectUserId }: UsersProps) {
  return (
    <FormControl>
      <FormLabel id="user-radio">Please select a User</FormLabel>
      <RadioGroup
        row
        aria-labelledby="user-radio"
        name="row-radio-buttons-group"
      >
        {
          users.map((user: iUser, index: number)=>{
            return <FormControlLabel onClick={() => actionSelectUserId(user.id)} key={index} value={user.id} control={<Radio />} label={user.name} />
          })
        }
      </RadioGroup>
    </FormControl>
  );
}
