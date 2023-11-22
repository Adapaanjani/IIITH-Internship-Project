import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel, Radio, RadioGroup, FormLabel, Grid } from '@mui/material';

import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import './FeedbackPage.css'
const FeedbackForm = () => {

    const [selectedDate, setSelectedDate] = useState('');
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [checkBoxValues, setCheckBoxValues] = useState({ option1: false, option2: false, option3: false ,option4: false,option5: false});
    const [selectedRadio, setSelectedRadio] = useState('');
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const handleDayChange = (event) => {
        setSelectedDay(event.target.value);
    };

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleCheckboxChange = (event) => {
        setCheckBoxValues({ ...checkBoxValues, [event.target.name]: event.target.checked });
    };

    const handleRadioChange = (event) => {
        setSelectedRadio(event.target.value);
    };

    const handleInputChange1 = (event) => {
        setInputValue1(event.target.value);
    };

    const handleInputChange2 = (event) => {
        setInputValue2(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here (send email, etc.)
        console.log('Form submitted!');
        window.location.reload();
    };

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/page1'); // Navigate to the home page when the "Back" button is clicked
    };

    return (
        <div>
           
        <form onSubmit={handleSubmit} className='form'>
            <div className='Heading'><h1>𝕃𝕖𝕒𝕧𝕖 𝔸 𝕋𝕙𝕠𝕦𝕘𝕙𝕥</h1></div>
                   
            <Grid container spacing={3}>

            <Grid item xs={6}>
                    <TextField label="Your Name" value={inputValue1} onChange={handleInputChange1} fullWidth />
                </Grid>
                <Grid item xs={6}>
                    <TextField label="Email Address" value={inputValue2} onChange={handleInputChange2} fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Interest</FormLabel>
                        <RadioGroup value={selectedRadio} onChange={handleRadioChange}>
                            <FormControlLabel value="MALE" control={<Radio />} label="Male" />
                            <FormControlLabel value="FEMALE" control={<Radio />} label="Female" />
                            <FormControlLabel value="PREFER NOT TO SAY" control={<Radio />} label="PREFER NOT TO SAY" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Fav space reasearch center</FormLabel>
                        <FormControlLabel
                            control={<Checkbox checked={checkBoxValues.option1} onChange={handleCheckboxChange} name="option1" />}
                            label="NASA."
                        />
                        <FormControlLabel
                            control={<Checkbox checked={checkBoxValues.option2} onChange={handleCheckboxChange} name="option2" />}
                            label="ISRO"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={checkBoxValues.option3} onChange={handleCheckboxChange} name="option3" />}
                            label="ESA"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={checkBoxValues.option4} onChange={handleCheckboxChange} name="option4" />}
                            label="SPACEX"
                        />
                        
                        <FormControlLabel
                            control={<Checkbox checked={checkBoxValues.option5} onChange={handleCheckboxChange} name="option5" />}
                            label="OTHERS"
                        />
                    </FormControl>
                </Grid>

                <Grid item xs={6}>
                    <TextField label="Date" type="paragraph" value={selectedDate} onChange={handleDateChange} fullWidth />
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>Day</InputLabel>
                        <Select value={selectedDay} onChange={handleDayChange}>
                            <MenuItem value="Monday">Monday</MenuItem>
                            <MenuItem value="Tuesday">Tuesday</MenuItem>
                            <MenuItem value="Wednesday">Wednesday</MenuItem>
                            <MenuItem value="Thursday">Thursday</MenuItem>
                            <MenuItem value="Friday">Friday</MenuItem>
                            <MenuItem value="Saturday">Saturday</MenuItem>
                            <MenuItem value="Sunday">Sunday</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel>FIELD OF INTREST</InputLabel>
                        <Select value={selectedOption} onChange={handleSelectChange}>
                            <MenuItem value="BLACKHOLE">BLACKHOLE</MenuItem>
                            <MenuItem value="PLANTES">PLANETS</MenuItem>
                            <MenuItem value="ASTEROIDS">ASTEROIDS</MenuItem>
                            <MenuItem value="ROCKETS">ROCKETS</MenuItem>
                            <MenuItem value="SATELLIETS">SATELLIETS</MenuItem>
                            <MenuItem value="SATELLIETS">OTHERS</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                
                
                
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                    <Button variant="contained" color="secondary" onClick={handleBack}>
                            Back
                        </Button>
                </Grid>
            </Grid>
        
        </form>
        <Footer/>
        </div>
    );
};

export default FeedbackForm;
