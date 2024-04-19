import React from 'react'
import Button from './Buttons'
import InputField from '../components/InputField'
const Salary = ({ handleChange, handleClick }) => {
    return (
        <div>
            <h4 className="text-lg font-medium mb-2">Salary</h4>
            <div className="mb-4">
                <Button onClickHandler={handleClick} value="monthly" title="Monthly" />
                <Button onClickHandler={handleClick} value="yearly" title="Yearly" />
                <div className='px-2 py-2'>

                </div>
                <div>
                    <label className="sidebar-label-container">
                        <input onChange={handleChange} type="radio" value="" name="test2" />
                        <span className="checkmark"></span>Any
                    </label>

                    <InputField
                        handleChange={handleChange}
                        value={30}
                        title="< 30000k"
                        name="test2"
                    />

                    <InputField
                        handleChange={handleChange}
                        value={50}
                        title="< 50000k"
                        name="test2"
                    />

                    <InputField
                        handleChange={handleChange}
                        value={80}
                        title="< 80000k"
                        name="test2"
                    />

                    <InputField
                        handleChange={handleChange}
                        value={100}
                        title="< 100000k"
                        name="test2"
                    />
                </div>
            </div>
        </div>
    )
}

export default Salary
