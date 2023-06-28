import React from 'react';
import PageTitle from './components/PageTitle';
import styles from './styles/modules/app.module.scss';
import AppHeader from './components/AppHeader';
import AppContent from './components/AppContent';
import { useState } from 'react';
import './App.css';

function App() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedin, setIsLoggedin] = useState(false);

    const login = (e) => {
        e.preventDefault();
        console.log(name, email, surname, patronymic, password);
        const userData = {
            name,
            surname,
            patronymic,
            email,
            password,
        };
        localStorage.setItem('token-info', JSON.stringify(userData));
        setIsLoggedin(true);
        setName('');
        setSurname('');
        setPatronymic('');
        setEmail('');
        setPassword('');
    };

    const logout = () => {
        localStorage.removeItem('token-info');
        setIsLoggedin(false);
    };

    return (
        <>
            <div style={{ textAlign: 'center' }}>

                {!isLoggedin ? (
                     <div className="login-wrapper">
                     <h1>Пожалуйста, авторизируйтесь</h1>
                     <form action="">
                       <label>
                         <p>Имя</p>
                         <input type="text" onChange={e => setName(e.target.value)} />
                       </label>
                       <label>
                         <p>Фамилия</p>
                         <input type="text" onChange={e => setSurname(e.target.value)} />
                       </label>
                       <label>
                         <p>Отчество</p>
                         <input type="text" onChange={e => setPatronymic(e.target.value)} />
                       </label>
                       <label>
                       <label>
                         <p>Логин</p>
                         <input type="text" onChange={e => setEmail(e.target.value)} />
                       </label>
                         <p>Пароль</p>
                         <input type="password" onChange={e => setPassword(e.target.value)} />
                       </label>
                       <div>
                       <button type="submit" onClick={login}>
                                Войти
                            </button>
                       </div>
                     </form>
                   </div>

                ) : (
                    <>
                        <div className="container">
                            <PageTitle>СПИСОК ДЕЛ</PageTitle>
                            <div className={styles.app__wraper}>
                                <AppHeader />
                                <AppContent />
                            </div>
                        </div>
                    </>

                )}
            </div>
        </>
    );
}

export default App;
