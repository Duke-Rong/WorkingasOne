import React from 'react';
import { DatePicker, Input} from 'antd';

const { TextArea } = Input;

// This is the add task panel

export const AddTaskPanel = (item, titleOnChange, briefDescriptionOnChange, dueDateOnChange) => {
    return (
        <div>
            <div>
            <h3 style={{ float: 'left', marginRight: '25%'}}>Title: </h3>
            <Input value={item.title} style={{ width: '40%' }} onChange={titleOnChange} />
            </div>
            
            <br />

            <div>
            <h3 style={{ float: 'left', marginRight: '5%'}}>Brief Description: </h3>
            <TextArea value={item.briefDescription} style={{ width: '60%' }} onChange={briefDescriptionOnChange} autoSize={{ maxRows: 3 }} />
            </div>

            <br />

            <div>
            <h3 style={{ float: 'left', marginRight: '17%'}}>Due Date: </h3>
            <DatePicker onChange={dueDateOnChange} placeholder={item.duedate}/>
            </div>
        </div>
    )
}