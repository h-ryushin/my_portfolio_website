import React from 'react';

function About() {
    const experiences = [
        {
            year: '2016年',
            title: '淡水魚ライフワークプロジェクトに参加',
            description: `
        中学校の「ライフワーク」プロジェクトで、淡水魚の取材とレポート作成に取り組み、
        江ノ島水族館や東京海洋大学などに取材。<br/>学んだことをレポートにまとめ、学内発表を行った。
      `,
        },
        {
            year: '2023年',
            title: 'Web制作の独学開始',
            description: `
        大学2年後期からHTML/CSS/JavaScriptを独学で学び、Webサイト制作のスキルを習得。<br/>
        プログラミングやデザインの基礎を身につけ、個人制作で実践。
      `,
        },
        {
            year: '2023年',
            title: 'Web制作インターンシップに参加',
            description: `
        フルリモートでのWeb制作インターンシップに参加し、クライアントのニーズに応じたWebサイトの制作を担当。<br/>
        デザインと機能性を兼ね備えたサイトを納品。
      `,
        },
        {
            year: '2024年',
            title: 'ライフイズテックにてUnityメンターとして中高生を指導開始',
            description: `
        大学の友人の勧めでUnityコースに参加し、VRゲームの制作にも挑戦。<br />
        Web制作スキルと併用し、ゲーム開発の新しい分野に挑戦。
        中高生のゲーム開発を指導。
      `,
        },
        {
            year: '2024年',
            title: 'Navi-奈良市_AI1DAY (Web)に参加',
            description: `
        生成AIを使って、奈良市をテーマにしたWebサイトの構成ができ、
        また、構成に沿ったWebサイトが作成を手助けする。<br />
        プログラミングが嫌いな子もいた中で、班の全員が納得いくものが完成できました。
      `,
        },
    ];
    const educationHistory = [
        { year: '2015年4月', description: '愛知教育大学附属岡崎中学　入学' },
        { year: '2018年3月', description: '愛知教育大学附属岡崎中学　卒業' },
        { year: '2018年4月', description: '私立名城大学附属高校　入学' },
        { year: '2021年3月', description: '私立名城大学附属高校　卒業' },
        { year: '2022年4月', description: '名城大学情報工学部情報工学科　入学' },
        { year: '2026年3月', description: '名城大学情報工学部情報工学科　卒業予定' },
    ];
    // スキルデータ
    const skills = [
        { name: 'Python', level: '初級', description: '学校などで習ったことができる' },
        { name: 'JavaScript', level: '初級', description: '簡単なアニメーションを追加できる' },
        { name: 'HTML/CSS', level: '中級', description: 'Webサイトを依頼されてつくったことがある　中高生向け指導経験あり' },
        { name: 'React', level: '初級', description: 'このWebサイトを作成' },
        { name: 'Unity', level: '中級', description: '2D・3Dゲームの基礎制作が可能　中高生向け指導経験あり' },
        { name: 'Git/GitHub', level: '中級', description: '基本的なバージョン管理、チームコラボレーションが可能　チーム開発経験あり' },
    ];

    return (
        <div className='about-wrapper'>
            <h4>平野龍真</h4>
            <div className='about-my-name'>
                <h2>HIRANO RYUSHIN</h2>
                <p>STUDENT</p>
            </div>
            <p>
                私は中学時代から自分の興味に基づいたプロジェクトに取り組み、大学ではWeb制作やプログラミングに力を入れてきました。中学では「ライフワーク」プロジェクト
                で淡水魚に関する取材やインタビューを行い、レポートをまとめる経験を通じて、自らテーマを追求する姿勢を養いました。
                <br></br>高校では生物と物理に興味を持ち、工学部進学を決意しました。大学2年の後期からは独学でHTML/CSS/JavaScriptを学び、Webサイトを制作するスキルを身につけ、インターンシップでは実務経験を積んでいます。
                <br></br>フルリモートの環境でクライアントニーズに応じたWebサイトの制作や、UI/UXを意識したデザインに取り組んできました。これまでのプロジェクトやWeb制作で培った探求心と課題解決能力が私の強みです。
            </p>
            <h5>これまでの主な取り組み</h5>
            <div className='my-efforts'>
                {experiences.map((exp, index) => (
                    <div key={index} style={{ marginBottom: '20px' }}>
                        <h6>
                            {exp.year}　{exp.title}
                        </h6>
                        <p dangerouslySetInnerHTML={{ __html: exp.description }} />
                    </div>
                ))}
            </div>
            <h5>スキル</h5>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>
                        <strong>{skill.name}</strong>（{skill.level}）: {skill.description}
                    </li>
                ))}
            </ul>
            <h5>学歴</h5>
            <ul>
                {educationHistory.map((entry, index) => (
                    <li key={index}>
                        <strong>{entry.year}</strong>　　　　　　　　{entry.description}
                    </li>
                ))}
            </ul>
            <div className='about-empty'></div>
        </div>
    );
}

export default About;