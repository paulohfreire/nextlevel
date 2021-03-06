import React, { useState, FormEvent } from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input/input';
import Select from '../../components/Select';


function TeacherList() {
   // const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    function searchTeachers(e: FormEvent) {
        e.preventDefault();

        /* const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        }) 
        setTeachers(response.data);*/
}

    return (
        <div id='page-teacher-list' className="container">
            <PageHeader title="Estes são os proffys disponíveis." >
                <form id="search-teachers" onSubmit={searchTeachers}>
                <Select 
                name="subject" 
                label="Matéria"
                value={subject}
                onChange={(e) => { setSubject(e.target.value)}}
                options={[
                    { value: 'Artes', label: 'Artes' },
                    { value: 'Física', label: 'Física' },
                    { value: 'Matemática', label: 'Matemática' },
                    { value: 'Português', label: 'Português' },
                    { value: 'História', label: 'História' },
                    { value: 'Geografia', label: 'Geografia' },
                    { value: 'Biologia', label: 'Biologia' },
                ]}
                />
                
                <Select 
                name="week-day" 
                label="Dia da semana" 
                value={week_day}
                onChange={(e) => { setWeekDay(e.target.value)}}
                options={[
                    { value: '0', label: 'Domingo' },
                    { value: '1', label: 'Segunda-feira' },
                    { value: '2', label: 'Terça-feira' },
                    { value: '3', label: 'Quarta-feira' },
                    { value: '4', label: 'Quinta-feira' },
                    { value: '5', label: 'Sexta-feira' },
                    { value: '6', label: 'Sábado' },
                ]}
                />
                    <Input
                        type="time"
                        name="time"
                        label="Horário"
                        value={time}
                        onChange={(e) => { setTime(e.target.value) }}/>
                    
                    <button type="submit">
                        Buscar
                    </button>
                </form>
                </PageHeader>
                
                <main>
                    <TeacherItem />
                    <TeacherItem />
                    <TeacherItem />
                </main>
            </div>
    )
}


export default TeacherList;