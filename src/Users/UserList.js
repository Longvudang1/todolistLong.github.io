import React from 'react'
import Card from '../UI/Card';
import classes from './YsersList.module.css'
import Button from '../UI/Button';
const UserList = (props) => {
    // eslint-disable-next-line
    if(props.users != 0){  
        return(
            <Card className={classes.users} >
                <ul>
                    
                    {props.users.map((user,index) => (
                        
                        <li key={user.id} className={classes.text} >
                            {user.task}
                            <div>
                                <Button className={classes.Button} onClick={() => {props.onDeleteTask (index)} }>Done task</Button>
                                <Button className={classes.Button} onClick={() => {props.onUpdateTask (index)}}>Edit task</Button>
                            </div>
                            
                        </li>
                    ))}
    
                </ul>
            </Card>
    
        );

    }
    else{
        return (<Card className={classes.users}>(You do not have any tasks to do)</Card>);
    }
    // return(
    //     <Card className={classes.users} >
    //         <ul>
                
    //             {props.users.map((user,index) => (
                    
    //                 <li key={user.id} className={classes.text} >
    //                     {user.task}
    //                     <div>
    //                         <Button className={classes.Button} onClick={() => {props.onDeleteTask (index)} }>Done task</Button>
    //                         <Button className={classes.Button} onClick={() => {props.onUpdateTask (index)}}>Edit task</Button>

    //                     </div>
                        
    //                 </li>
    //             ))}

    //         </ul>
    //     </Card>

    // );
}
export default UserList;