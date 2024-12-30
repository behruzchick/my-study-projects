import React from 'react'
import Header from '../Header/Header'
import buxaraImg from '../../../assets/tashkent-n.jpg';
import './Main.css'
import clear from '../../../assets/clear.png';
import clody from '../../../assets/cloudy.png';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
const Main = ({ todayWh }) => {
    console.log(todayWh.dayli_3st_celsi.map((item) => item))
    return (
        <div className='main-wrappe'>
            <img src={buxaraImg} alt="bg-img" className='bg-img' />
            <div className="today-wheather-block">
                <div className="today-wheather-header-title">
                    <b className='title'>{todayWh.city}</b>
                    <p>{todayWh.date}</p>
                    <div className="wheather-celsia">
                        <img src={clear} alt="" />
                        <h3>{todayWh.celsi}</h3>
                        <b>{todayWh.celsiMin}</b>
                    </div>
                    <b style={{ marginTop: '15px' }}>{todayWh.havo}</b>
                </div>
                <div className="wheather-stats">
                    <div className="wheather-stat-table-1">
                        <p>Namlik : {todayWh.namlik}</p>
                        <p>Shamol: {todayWh.shamol}</p>
                        <p>Bosim: {todayWh.bosim}</p>
                    </div>
                    <div className="wheather-stat-table-1">
                        <p>Oy: {todayWh.oy}</p>
                        <p>Quyosh chiqishi: {todayWh.qoyuosh_chiqishi}</p>
                        <p>Quyosh botishi: {todayWh.quyosh_botishi}</p>
                    </div>
                </div>
                <div className="wheather-3st">
                    {
                        todayWh.dayli_3st_celsi.map((item) => (
                            <div className="row-wh">
                                <p>{item.time}</p>
                                <img style={{ width: "70px" }} src={item.cloudy ? clody : clear} alt="" />
                                <p>{item.celsi}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="wheathers-week">
                <div className="wheathers-week-header-title">
                    <b className='title'>Haftalik ob-havo ma'lumoti</b>
                </div>
                <table className='table'>
                    <thead className="wheathers-week-header-table-head">
                        {/* <tr className='thead-t'> */}
                        <th scope='col' className='min-text'>Kun</th>
                        <th scope='col' className='min-text'>Harorat</th>
                        <th scope='col' className='min-text'>Tavsif</th>
                        <th scope='col' className='min-text'>Yog'ingarchilik</th>
                        {/* </tr> */}
                    </thead>
                    <div className="wheathers-week-days">
                        <tbody className="wheathers-week-day">
                            <tr className="tab">
                                <th className='d-flex flex-column'>
                                    <th scope='row'>Ertaga</th>
                                    <th>1 iyul</th>
                                </th>
                                <tr scope='row' className="tab-c">
                                    <img style={{ width: "40px" }} src={clody} alt="" />
                                    <th className="tab-celsi">
                                        <th scope='row' className='c-text'>+32°</th>
                                        <td className='c-text'>+24°</td>
                                    </th>
                                </tr>
                                <th scope='row'>bulutli</th>
                                <th scope='row'>0%</th>
                            </tr>
                            <tr className="tab">
                                <th className='d-flex flex-column'>
                                    <th scope='row'>Ertaga</th>
                                    <th>1 iyul</th>
                                </th>
                                <tr scope='row' className="tab-c">
                                    <img style={{ width: "40px" }} src={clody} alt="" />
                                    <th className="tab-celsi">
                                        <th scope='row' className='c-text'>+32°</th>
                                        <td className='c-text'>+24°</td>
                                    </th>
                                </tr>
                                <th scope='row'>bulutli</th>
                                <th scope='row'>0%</th>
                            </tr>
                        </tbody>
                    </div>
                </table>
            </div>
        </div>
    )
}

export default Main