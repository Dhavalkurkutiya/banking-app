import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSIdebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {

    const loggedIn = { firestName: "Dhaval Kurkutiya" }

    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Hello👋"
                        user={loggedIn?.firestName || 'Guest'}
                        subtext="Access and manage youre account and transactions efficiently"
                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={15499}
                    />
                </header>
                Recent Transactions
            </div>
            <RightSidebar
                user={loggedIn}
                transactions={[]}
                banks={[{currentBalance: 123.52}, {currentBalance: 123.52}]}
            />
        </section>
    )
}

export default Home;