import React from 'react'
import { useNavigate } from 'react-router-dom'
import { plans } from '../../utils/plans'
import { formatNum } from '../../utils/format'

const Plans = ({ showPlan }) => {
    const navigate = useNavigate()
    return (
        <section className={`border-2 w-full h-max rounded-2xl p-4 glass ${ showPlan ? null : 'hidden' }`}>
            <h1 className='font-bold mb-3'>Plans</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                <div onClick={() => navigate('/forex-deposit', { state: { amount: plans.currencyStarter, plan: "currencyStarter" } })} className="border-2 w-full h-max rounded-2xl p-4 bg-[#C6E2B5] glass cursor-pointer">
                    <h2 className='text-xl font-bold'>Currency Starter</h2>
                    <hr className='my-1' />
                    <p className='font-bold text-lg'>${plans.currencyStarter}</p>
                </div>

                <div onClick={() => navigate('/forex-deposit', { state: { amount: plans.TradeUp, plan: "TradeUp" } })} className="border-2 w-full h-max rounded-2xl p-4 bg-[#5da5c1] glass cursor-pointer">
                    <h2 className='text-xl font-bold'>Trade Up</h2>
                    <hr className='my-1' />
                    <p className='font-bold text-lg'>${plans.TradeUp}</p>
                </div>

                <div onClick={() => navigate('/forex-deposit', { state: { amount: plans.ForexFusion, plan: "ForexFusion" } })} className="border-2 w-full h-max rounded-2xl p-4 bg-[#FFA07A] glass cursor-pointer">
                    <h2 className='text-xl font-bold'>Forex Fusion</h2>
                    <hr className='my-1' />
                    <p className='font-bold text-lg'>${plans.ForexFusion}</p>
                </div>

                <div onClick={() => navigate('/forex-deposit', { state: { amount: plans.MarketMaker, plan: "MarketMaker" } })} className="border-2 w-full h-max rounded-2xl p-4 bg-[#2E4053] text-white glass cursor-pointer">
                    <h2 className='text-xl font-bold'>Market Maker</h2>
                    <hr className='my-1' />
                    <p className='font-bold text-lg'>${plans.MarketMaker}</p>
                </div>

                <div onClick={() => navigate('/forex-deposit', { state: { amount: plans.ProTrader, plan: "ProTrader" } })} className="border-2 w-full h-max rounded-2xl p-4 bg-[#f2b956] glass cursor-pointer">
                    <h2 className='text-xl font-bold'>Pro Trader</h2>
                    <hr className='my-1' />
                    <p className='font-bold text-lg'>${plans.ProTrader}</p>
                </div>

                <div onClick={() => navigate('/forex-deposit', { state: { amount: plans.CurrencyCommander, plan: "CurrencyCommander" } })} className="border-2 w-full h-max rounded-2xl p-4 bg-[#6C5CE7] text-white glass cursor-pointer">
                    <h2 className='text-xl font-bold'>Currency Commander</h2>
                    <hr className='my-1' />
                    <p className='font-bold text-lg'>${plans.CurrencyCommander}</p>
                </div>

                <div onClick={() => navigate('/forex-deposit', { state: { amount: plans.FXExplorer, plan: "FXExplorer" } })} className="border-2 w-full h-max rounded-2xl p-4 bg-[#333333] text-white glass cursor-pointer">
                    <h2 className='text-xl font-bold'>FX Explorer</h2>
                    <hr className='my-1' />
                    <p className='font-bold text-lg'>${plans.FXExplorer}</p>
                </div>

                <div onClick={() => navigate('/forex-deposit', { state: { amount: plans.GlobalInvestor, plan: "GlobalInvestor" } })} className="border-2 w-full h-max rounded-2xl p-4 bg-[#0097A7] text-white glass cursor-pointer">
                    <h2 className='text-xl font-bold'>Global Investor</h2>
                    <hr className='my-1' />
                    <p className='font-bold text-lg'>${formatNum(plans.GlobalInvestor)}</p>
                </div>

                <div onClick={() => navigate('/forex-deposit', { state: { amount: plans.MarketMaster, plan: "MarketMaster" } })} className="border-2 w-full h-max rounded-2xl p-4 bg-[#FFC080] glass cursor-pointer">
                    <h2 className='text-xl font-bold'>Market Master</h2>
                    <hr className='my-1' />
                    <p className='font-bold text-lg'>${formatNum(plans.MarketMaster)}</p>
                </div>

                <div onClick={() => navigate('/forex-deposit', { state: { amount: plans.TradeWarrior, plan: "TradeWarrior" } })} className="border-2 w-full h-max rounded-2xl p-4 bg-[#4169E1] text-white glass cursor-pointer">
                    <h2 className='text-xl font-bold'>Trade Warrior</h2>
                    <hr className='my-1' />
                    <p className='font-bold text-lg'>${formatNum(plans.TradeWarrior)}</p>
                </div>

                <div onClick={() => navigate('/forex-deposit', { state: { amount: plans.ForexProdigy, plan: "ForexProdigy" } })} className="border-2 w-full h-max rounded-2xl p-4 bg-[#B1B1B1] text-white glass cursor-pointer">
                    <h2 className='text-xl font-bold'>Forex Prodigy</h2>
                    <hr className='my-1' />
                    <p className='font-bold text-lg'>${formatNum(plans.ForexProdigy)}</p>
                </div>

                <div onClick={() => navigate('/forex-deposit', { state: { amount: 11000, plan: "CurrencyKing" } })} className="border-2 w-full h-max rounded-2xl p-4 bg-[#FF69B4] text-white glass cursor-pointer">
                    <h2 className='text-xl font-bold'>Currency King</h2>
                    <hr className='my-1' />
                    <p className='font-bold text-lg'>Above ${formatNum(plans.CurrencyKing)}</p>
                </div>
            </div>

        </section>
    )
}

export default Plans