import React from 'react'
import '../style/grid.css'
import GridCard from './GridCard'
import rasm from '../image/fi_check.svg'
function Grid() {
    return (
        <section className='grid'>
            <div className="container">
                <div className="grid__content">
                    <GridCard text='Funding Rate Page' desc='Page that provides a live look at all funding rates with popular timeframes in annualized format' span='Funding amount: $45,000 - $85,000' btn_text='Funded' />
                    <GridCard text='CLI Trading Tool' desc='Self-hosted CLI tool leveraging the dYdX API to allow all functionalities from a terminal' span='Funding amount: $25,000 - $40,000' btn_text='Funded' />
                    <GridCard text='New Language SDKs' desc='Replicate existing Python SDK to new programming languages with all the same features' span='Funding amount: $25,000 - $40,000' btn_text='Open' />
                    <div className='gridCard'>
                    <div className="gridCard__content">
                        <h3>Liquidation Alert Tool</h3>
                        <p>Self-hosted tool that alerts the trader of upcoming liquidation prices across multiple messaging venues</p>
                        <span>Funding amount:
                        $30,000 - $50,000</span>
                    </div>
                    <button>Completed <img src={rasm} alt="" /></button>
                </div>
                <GridCard text='Governance Dashboard' desc='Governance page to promote  discussions, proposals, delegation and voting' span='Funding amount:  $15,000 - $30,000' btn_text='Funded' />
                <GridCard text='Delegation Tool' desc='Webpage to allow active participants to market their voting and enable direct delegation from DYDX holders' span='Funding amount: $15,000 - $30,000' btn_text='Funded' />
                <GridCard text='Newsletter' desc='Weekly or Monthly newsletters promoting and educating the dYdX platform' span='Funding amount: $10,000 - $20,000' btn_text='Funded' />
                <GridCard text='Academy Contributions' desc='Webpages, Courses, Glossaries and Youtube libraries educating new users on dYdX' span='Funding amount: $10,000 - $25,000' btn_text='Funded' />
                <GridCard text='Discord bots' desc='Additional Discord bots that notify members of activity on dYdX and governance' span='Funding amount: $5,000 - $10,000' btn_text='Open' />
                <GridCard text='Reward tracking & Simulator' desc='Page or tool that allows traders to calculate future rewards and simulate earnings from activity' span='Funding amount: $20,000 - $30,000' btn_text='Funded' />
            </div>
        </div>
    </section >
  )
}

export default Grid
