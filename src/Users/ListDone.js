import React from 'react'
import Card from '../UI/Card';
import classes from './YsersList.module.css'
const ListDone = (props) => {
    // eslint-disable-next-line
    if(props.users != 0 ){ 
        return(
            <Card className={classes.users} >
                <ul>
                    {props.users.map((user,index) => { 
                        console.log(user)
                        return (
                        <li key={user.id} className={classes.text} >
                            {user.task}
                        </li>
                    )})}
    
                </ul>
            </Card>
    
        );

    }
    else{
        return (<Card className={classes.users}>(You do not have any tasks to do)</Card>);
    }
    
}
export default ListDone;