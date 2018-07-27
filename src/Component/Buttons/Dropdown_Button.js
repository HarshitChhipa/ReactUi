import React, { Component } from 'react';
import SelectBox from './Select-Box';

class Dropdown_Button extends Component {

    /*setState=()=>{
     click:false
    };*/

    state={
        SingleCity:null,
    };
    handelchange=name=>value=>{
        this.setState({
            [name]: value,
        });
        alert("hello world");
    }
    render() {
        return <div>
            <div style={{position: 'relative'}}>
                <SelectBox
                    items={[
                        { value: 'Ahmedabad', id: 1 },
                        { value: 'Bangalore', id: 2 },
                        { value: 'Chennai', id: 3 },
                        { value: 'Delhi NCR', id: 4 },
                        { value: 'Hyderabad', id: 5 },
                        { value: 'Kolkata', id: 6 },
                        { value: 'Mumbai', id: 7 },
                    ]}

                    onChange={this.handelchange()}
                />
            </div>
        </div>
    }
}

export default Dropdown_Button;