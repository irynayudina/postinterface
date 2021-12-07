import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Button from '../components/Button';
import home from './home.PNG'
import hpass from './hidden_pass.PNG'
import vpass from './visible_paass.PNG'
import acc from './accept.PNG'
import sn from './signup.PNG'
import log from './login.PNG'
import user from './userpage.PNG'
import men from './makeen.PNG'
import menc from './enc.PNG'
import enlst from './enlist.PNG'
import call from './calc.PNG'
import ip from './incorrect_field.PNG'
import cp from './corect_field.PNG'
import but from './button.PNG'
import myFile from "./referenceSystem.chm";
const Reference = () => {
    return(
        <div className="the-root-body">
            <div className="view-main"> 
            <a href={myFile} target='_blank' style={{ textDecoration: 'none' }} download><div style={{width:'200px'}}> <Button name={"Файл довідки"} /></div></a>
                <h2 style={{color:'#026b02', fontSize:'40px'}}> Довідка</h2>
                <ol type="1">
                    <li><Link to="/reference#rev" style={{ textDecoration: 'none' }}><p className="clickable" style={{color:'#026b02'}}>Загальний опис системи</p></Link></li>
                    <li><Link to="/reference#icom" style={{ textDecoration: 'none' }}><p className="clickable" style={{color:'#026b02'}}>Інформація</p></Link>
                        <ol type="a">
                            <li><Link to="/reference#icom" style={{ textDecoration: 'none' }}><p className="clickable" style={{color:'#026b02'}}>Подивитись інформацію про компанію</p></Link></li>
                            <li><Link to="/reference#ivac" style={{ textDecoration: 'none' }}><p className="clickable" style={{color:'#026b02'}}>Подивитись інформацію щодо вакансій</p></Link></li>
                            <li><Link to="/reference#imap" style={{ textDecoration: 'none' }}><p className="clickable" style={{color:'#026b02'}}>Подивитись карту відділень</p></Link></li>
                            <li><Link to="/reference#ifop" style={{ textDecoration: 'none' }}><p className="clickable" style={{color:'#026b02'}}>Подивитись інформацію для ФОП</p></Link></li>
                            <li><Link to="/reference#ifiz" style={{ textDecoration: 'none' }}><p className="clickable" style={{color:'#026b02'}}>Подивитись інформацію для приватних осіб</p></Link></li>
                            <li><Link to="/reference#iconf" style={{ textDecoration: 'none' }}><p className="clickable" style={{color:'#026b02'}}>Подивитись інформацію щодо конфіденційності</p></Link></li>
                            <li><Link to="/reference#icompensation" style={{ textDecoration: 'none' }}><p className="clickable" style={{color:'#026b02'}}>Подивитись інформацію щодо компенсацій</p></Link></li>
                        </ol>
                    </li>
                    <li><p className="clickable" style={{color:'#026b02'}}>Обліковий запис</p>
                        <ol type="a">
                            <li><Link to="/reference#reg" style={{ textDecoration: 'none' }}><p className="clickable" style={{color:'#026b02'}}>Зареєструватись у системі</p></Link></li>
                            <li><Link to="/reference#enter" style={{ textDecoration: 'none' }}><p className="clickable" style={{color:'#026b02'}}>Увійти в систему</p></Link></li>
                        </ol>
                    </li>
                    <li><p className="clickable" style={{color:'#026b02'}}>Посилки</p>
                        <ol type="a">
                            <li><p className="clickable" style={{color:'#026b02'}}>Лише зареєстрованим користувачам</p>
                                <ol type="i">
                                    <li><Link to="/reference#makeEN" style={{ textDecoration: 'none' }}><p className="clickable" style={{color:'#026b02'}}>Створити електронну накладну</p></Link></li>
                                    <li><Link to="/reference#seeEN" style={{ textDecoration: 'none' }}><p className="clickable" style={{color:'#026b02'}}>Подивитись список своїх електронних накладних</p></Link></li>
                                </ol>
                            </li>
                            <li><p className="clickable" style={{color:'#026b02'}}>Всім користувачам</p>
                                <ol type="i">
                                    <li><Link to="/reference#calcost" style={{ textDecoration: 'none' }}><p className="clickable" style={{color:'#026b02'}}>Вирахувати вартість доставки</p></Link></li>
                                </ol>
                            </li>
                        </ol>
                    </li>
                    <li><Link to="/reference#glsr" style={{ textDecoration: 'none' }}><p className="clickable" style={{color:'#026b02'}}>Голосарій</p></Link></li>
                </ol>
                <h2 id="rev">Загальний опис системи</h2>
                <p>Веб застосунок призначений для користувачів поштових послуг компанії.
                 За допомогою нього вони можуть виконувати деякі операції стосовно відправлень а 
                 також дізнаватись інформацію.
                  Певні дії дозволені лише авторизованим користувачам. 
                  Відкривається застосунок з головної сторінки, 
                Верхня та нижня панель навігації доступні з будь-якої сторінки системи. 
                </p> <img className="bigimg" src={home} alt="homepage" /><hr />
                <h2>Інформація </h2>
                <p id="icom">Подивитись інформацію про компанію. 
                Сторінка відкривається натисненням на "Про нас" пункту верхньої панелі навігації
                </p>
                <p> &nbsp;</p><hr />
                <p id="ivac">Подивитись інформацію щодо вакансій
                Сторінка відкривається натисненням на "Вакансії" пункту верхньої панелі навігації
                </p>
                <p> &nbsp;</p><hr />
                <p id="imap">
                Подивитись карту відділень. Сторінка відкривається натисненням 
                на "Карта відділень" пункту верхньої панелі навігації
                </p>
                <p> &nbsp;</p><hr />
                <p id="ifop">Подивитись інформацію для ФОП
                Сторінка відкривається натисненням на "Для ФОП" пункту верхньої панелі навігації
                </p>
                <p> &nbsp;</p><hr />
                <p id="ifiz">Подивитись інформацію для приватних осіб
                Сторінка відкривається натисненням на "Для приватних осіб" пункту верхньої панелі навігації
                </p>
                <p> &nbsp;</p><hr />
                <p id="iconf">Подивитись інформацію щодо конфіденційності
                Сторінка відкривається натисненням на "Конфіденційність" пункту нижньої панелі навігації
                </p>
                <p> &nbsp;</p><hr />
                <p id="icompensation">Подивитись інформацію щодо компенсацій
                Сторінка відкривається натисненням на "Компенсація" пункту нижньої панелі навігації
                </p>
                <p> &nbsp;</p><hr />
                <h2>Обліковий запис</h2>
                <p id="reg">Зареєструватись у системі
                Сторінка відкривається натисненням на "Реєстрація" пункту верхньої панелі навігації. 
                Користувач повинен заповнити форму реєстрації. Заповнити кожне поле, ввести бажаний пароль. 
                Щоб сховати/побачити пароль, натиснути на значок ока поруч з полем паролю. <img src={hpass} alt="" /> <img src={vpass} alt="" />
                При заповненні полів вони проходять валідацію. 
                Для реєстрації необхідно погодитись із політикою коніеденційності. <img src={acc} alt="" />
                Натиснення кнопки "Зареєструватись" відкриє сторінку користувача, якщо данні коректні, 
                в іншому випадку буде виведено повідомлення про помилку. 
                </p>
                <img className="bigimg" src={sn} alt="" />
                <p> &nbsp;</p> <hr />
                <p id="enter">Увійти в систему
                Сторінка відкривається натисненням на "Вхід" пункту верхньої панелі навігації. 
                Користувач повинен заповнити форму авторизації. Заповнити кожне поле, ввести логін та пароль.
                Щоб сховати/побачити пароль, натиснути на значок ока поруч з полем паролю. 
                При заповненні полів вони проходять валідацію. 
                Для реєстрації необхідно погодитись із політикою коніеденційності.
                Натиснення кнопки "Увійти" відкриє сторінку користувача, якщо данні коректні, 
                та логін з паролем дійсні і відповідні, 
                в іншому випадку буде виведено повідомлення про помилку.                 
                </p>
                <img src={log} alt="" className="bigimg" /> <img src={user} alt="" className="bigimg" />
                <p> &nbsp;</p><hr />
                <h2>Посилки</h2>
                <h3>Лише зареєстрованим користувачам</h3>
                <p id="makeEN">Створити електронну накладну. 
                Для виконання цієї дії необхідно пройти авторизацію. 
                Сторінка відкривається натисненням на "Створити ЕН" пункту бокової панелі навігації на сторінці користувача. 
                Користувач повинен заповнити форму створення ЕН, заповнити необхідні поля. 
                Додати (за необхідністю) інше місце та заповнити його поля. Можна видаляти та додавати місця окрім першого. 
                Натиснення кнопки "Сформувати накладну" додає новий запис до списту ЕН та показує вспливаюче вікно з номером накладної 
                (за умови що дані коректні, або виводить повідомлення про помилку). 
                </p>
                <img src={men} alt="" className="bigimg" /><img src={menc} alt="" className="bigimg" />
                <p> &nbsp;</p><hr />
                <p id="seeEN">Подивитись список своїх електронних накладних. 
                Для виконання цієї дії необхідно пройти авторизацію. 
                Сторінка відкривається натисненням на "Створити ЕН" пункту бокової панелі навігації на сторінці користувача. 
                На ній представлено список номерів накладних та дат їх створення. 
                </p><img src={enlst} alt="" className="bigimg" /><hr />
                <h3>Всім користувачам</h3>
                <p id="calcost">Вирахувати вартість доставки. 
                Сторінка відкривається натисненням на "Калькулятор" пункту нижньої панелі навігації. 
                Користувач повинен заповнити всі необхідна поля та натиснути кнопку 
                "Вирахувати", якщо дані коректні, в полі вартості з'явиться вирахувана сумма. 
                </p><img src={call} alt="" className="bigimg" /><hr />
                <h2 id="glsr">Голосарій</h2>
                <ol>
                    <li><Link to="/reference#gavt" style={{ textDecoration: 'none' }}><p className="clickable" style={{color:'#026b02'}}>Авторизація</p></Link></li>
                    <li><Link to="/reference#gavtU" style={{ textDecoration: 'none' }}><p className="clickable" style={{color:'#026b02'}}>Авторизований користувач</p></Link></li>
                    <li><Link to="/reference#gval" style={{ textDecoration: 'none' }}><p className="clickable" style={{color:'#026b02'}}>Валідація</p></Link></li>
                    <li><Link to="/reference#gvpn" style={{ textDecoration: 'none' }}><p className="clickable" style={{color:'#026b02'}}>Верхня панель навігації</p></Link></li>
                    <li><Link to="/reference#gexit" style={{ textDecoration: 'none' }}><p className="clickable" style={{color:'#026b02'}}>Вихід</p></Link></li>
                    <li><Link to="/reference#gent" style={{ textDecoration: 'none' }}><p className="clickable" style={{color:'#026b02'}}>Вхід</p></Link></li>
                    <li><Link to="/reference#gmain" style={{ textDecoration: 'none' }}><p className="clickable" style={{color:'#026b02'}}>Головна сторінка</p></Link></li>
                    <li><Link to="/reference#gcal" style={{ textDecoration: 'none' }}><p className="clickable" style={{color:'#026b02'}}>Калькулятор</p></Link></li>
                    <li><Link to="/reference#gbut" style={{ textDecoration: 'none' }}><p className="clickable" style={{color:'#026b02'}}>Кнопка</p></Link></li>
                    <li><Link to="/reference#gcorD" style={{ textDecoration: 'none' }}><p className="clickable" style={{color:'#026b02'}}>Коректні дані</p></Link></li>
                    <li><Link to="/reference#guser" style={{ textDecoration: 'none' }}><p className="clickable" style={{color:'#026b02'}}>Користувач</p></Link></li>
                    <li><Link to="/reference#glog" style={{ textDecoration: 'none' }}><p className="clickable" style={{color:'#026b02'}}>Логін</p></Link></li>
                    <li><Link to="/reference#gnotAvtU" style={{ textDecoration: 'none' }}><p className="clickable" style={{color:'#026b02'}}>Неавторизований користувач</p></Link></li>
                    <li><Link to="/reference#glpn" style={{ textDecoration: 'none' }}><p className="clickable" style={{color:'#026b02'}}>Нижня панель навігації</p></Link></li>
                    <li><Link to="/reference#gpass" style={{ textDecoration: 'none' }}><p className="clickable" style={{color:'#026b02'}}>Пароль</p></Link></li>
                    <li><Link to="/reference#gfield" style={{ textDecoration: 'none' }}><p className="clickable" style={{color:'#026b02'}}>Поле</p></Link></li>
                    <li><Link to="/reference#gpolConf" style={{ textDecoration: 'none' }}><p className="clickable" style={{color:'#026b02'}}>Політика конфіденційності</p></Link></li>
                    <li><Link to="/reference#greg" style={{ textDecoration: 'none' }}><p className="clickable" style={{color:'#026b02'}}>Реєстрація</p></Link></li>
                    <li><Link to="/reference#genLst" style={{ textDecoration: 'none' }}><p className="clickable" style={{color:'#026b02'}}>Список ЕН</p></Link></li>
                    <li><Link to="/reference#genCrt" style={{ textDecoration: 'none' }}><p className="clickable" style={{color:'#026b02'}}>Створення ЕН</p></Link></li>
                    <li><Link to="/reference#gusrpg" style={{ textDecoration: 'none' }}><p className="clickable" style={{color:'#026b02'}}>Сторінка користувача</p></Link></li>
                    <li><Link to="/reference#gcond" style={{ textDecoration: 'none' }}><p className="clickable" style={{color:'#026b02'}}>Умови використання сайту</p></Link></li>
                    <li><Link to="/reference#gform" style={{ textDecoration: 'none' }}><p className="clickable" style={{color:'#026b02'}}>Форма</p></Link></li>
                </ol>
                <p id="gavt">Авторизація - набування розпізнавання системою шляхом реєстрації 
                або входу, отримання прав 
                на виконання певних дозволених даному користувачеві дій у системі
                </p>
                <p> &nbsp;</p><hr />
                <p id="gavtU">Авторизований користувач - користувач що пройшов авторизацію    
                </p>
                <p> &nbsp;</p><hr />
                <p id="gval">Валідація - перевірка будь-чого на збіжність з правилами що для цього визначені  
                </p>
                <p> &nbsp;</p><hr />
                <p id="gvpn">Верхня панель навігації - візуальні елементи що при натисканні 
                ведуть до певних розділів сайту, розташовані згори сторінки та завжди доступні у 
                будь- якій частині сайту.  
                </p>
                <p> &nbsp;</p><hr />
                <p id="gexit">Вихід - набування статусу неавторизованого користувача  
                </p>
                <p> &nbsp;</p><hr />
                <p id="gent">Вхід - сторінка з формою, яку користувач заповняє для авторизації на 
                сайті за даними існуючого акаунту  
                </p>
                <p> &nbsp;</p><hr />
                <p id="gmain">Головна сторінка - сторінка сайту, яка завантажується першою при вході на сайт,
                містить привітальну фразу з логотипом та посилання до інших частин сайту  
                </p>
                <p> &nbsp;</p><hr />
                <p id="gcal">Калькулятор - сторінка з формою для вираховування вартості доставки посилки  
                </p>
                <p> &nbsp;</p><hr />
                <p id="gbut">Кнопка - графічний елемент що служить для відправки даних форми 
                або переходу до певної частини сайту  
                </p> <img src={but} alt="" />
                <p> &nbsp;</p><hr />
                <p id="gcorD">Коректні дані - дані які пройшли валідацію   
                </p>
                <p> &nbsp;</p><hr />
                <p id="guser">Користувач - фізична особа яка використовує сайт 
                (переглядає або виконує будь-які дії на ньому) 
                </p>
                <p> &nbsp;</p><hr />
                <p id="glog">Логін - номер телефону або адреса електронної  скриньки 
                зареєстрованого користувача, повинен бути унікальним, служить для ідентифікації користувача у системі
                </p>
                <p> &nbsp;</p><hr />
                <p id="gnotAvtU">Неавторизований користувач - користувач що не пройшов авторизацію    
                </p>
                <p> &nbsp;</p><hr />
                <p id="glpn">Нижня панель навігації - візуальні елементи що при натисканні 
                ведуть до певних розділів сайту, розташовані внизу сторінки та завжди доступні 
                у будь- якій частині сайту
                </p>
                <p> &nbsp;</p><hr />
                <p id="gpass">Пароль - послідовність букв цифр і символів що прив’язана до логіну, 
                служить для ідентифікації користувача у системі при авторизації разом з логіном
                </p>
                <p> &nbsp;</p><hr />
                <p id="gfield">Поле - засіб приймання інформації від користувача, може бути 
                текстовим або спеціальним, кожне поле має свої обмеження на формат вводимої 
                інформації, поле з не коректними даними в ньому, підсвічується червоним. <img src={ip} alt="" /> <img src={cp} alt="" />
                Підказки щодо допустимого формату даних наведено в повідомленнях під полем.
                </p>
                <p> &nbsp;</p><hr />
                <p id="gpolConf">Політика конфіденційності - інформація щодо того як дані 
                користувача можуть використовуватися  
                </p>
                <p> &nbsp;</p><hr />
                <p id="greg">Реєстрація - процес створення на сайті нового акаунту користувача
                </p>
                <p> &nbsp;</p><hr />
                <p id="genLst">Список ЕН - список номерів електронних накладних сформованих 
                користувачем на сайті у форматі таблиці з двома стовпчиками: номер накладної та дата її формування 
                </p>
                <p> &nbsp;</p><hr />
                <p id="genCrt">Створення ЕН - сторінка з формою для створення електронної накладної  
                </p>
                <p> &nbsp;</p><hr />
                <p id="gusrpg">Сторінка користувача - сторінка, на якій знаходиться інформація щодо авторизованого 
                користувача а також меню з посиланнями на доступні для цього користувача функції
                </p>
                <p> &nbsp;</p><hr />
                <p id="gcond">Умови використання сайту - умови та правила яким повинен слідувати користувач сайту 
                </p>
                <p> &nbsp;</p><hr />
                <p id="gform">Форма - сукупність полів та кнопок при взаємодії з якими користувач отримує бажаний результат 
                (інформацію, або створення об’єктів у системі) 
                </p>
            </div>
        </div>
    );
};
export default Reference;