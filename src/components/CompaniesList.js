import React, { useState } from 'react';
import './CompanyList.css';
import ForwardIcon from '@material-ui/icons/Forward';
import Company from './Company';



function CompaniesList() {

    const [className, setClassName] = useState('small');


    const changeClassSmall = () => {
        setClassName('small')

    }
    const changeClassMid = () => {
        setClassName('mid')

    }
    const changeClassLarge = () => {
        setClassName('large')

    }

    return (
        <div className="comapanyList-container">
            <div className="container">
                <div className="filter-options">
                    <h5>BY COMPANY SIZE:</h5>
                    <h4 onClick={changeClassSmall} className={className === 'small' && 'small'}>SMALL COMPANIES</h4>
                    <h4 onClick={changeClassMid} className={className === 'mid' && 'mid'}>MEDIUM COMPANIES</h4>
                    <h4 onClick={changeClassLarge} className={className === 'large' && 'large'}>LARGE COMPANIES</h4>
                </div>
                <div id="black-arrow" className={'ar' + className}>
                    <ForwardIcon className="arrow" />
                </div>
                <div className="title-container">
                    <h2 className="company">Company</h2>
                    <h2 className="location">Location</h2>
                    <h2 className="sector">Sector</h2>
                </div>

                {
                    className === 'small' &&


                    <ul className="records">


                        <Company
                            id="first-li"
                            index="1"
                            logo="https://assets.entrepreneur.com/static/tcc/logos/TCC_Scribe_Media_LLC_Logo_300x300.png?width=80"
                            name="Scribe Media"
                            flag="https://assets.entrepreneur.com/static/20180907100341-flag-america-01.svg"
                            location="Austin, Texas"
                            sector="Publishing"

                            about="Scribe helps professionals share their knowledge by turning their ideas into professionally published books and speeches. Its clients include Fortune 500 CEOs and executives, doctors, lawyers, financial advisors, high level consultants and entrepreneurs."
                            companyPhoto="https://assets.entrepreneur.com/static/tcc/profile/TCC_ScribeMedia_1920x1080.png?width=550"
                            foundingYear="2014"
                            usEmployees="35"
                            website="https://scribemedia.com/"

                        />




                        <Company
                            id="sec-li"
                            index="2"
                            logo="https://assets.entrepreneur.com/static/tcc/logos/TCC_Hughes_Marino_Logo_300x300.png?width=80"
                            name="Hughes Marino"
                            flag="https://assets.entrepreneur.com/static/20180907100341-flag-america-01.svg"
                            location="San Diego, Calif."
                            sector="Commercial Real Estate"

                            about="Hughes Marino is a real estate firm that exclusively represents tenants and buyers -- never landlords -- so it never has a conflict of interest. With offices across the nation, Hughes Marino has been helping companies lease, buy and build commercial space for over 25 years."
                            companyPhoto="https://assets.entrepreneur.com/static/tcc/profile/TCC_HughesMarino_1920x1080.jpg?width=550"
                            foundingYear="2011"
                            usEmployees="74"
                            website="http://hughesmarino.com/"

                        />



                        <Company
                            id="third-li"
                            index="3"
                            logo="https://assets.entrepreneur.com/static/tcc/logos/TCC_MAZ_Logo_300x300.png?width=80"
                            name="Maz"
                            flag="https://assets.entrepreneur.com/static/20180907100341-flag-america-01.svg"
                            location="New York, N.Y."
                            sector="Content Logistics"

                            about="Maz has built a content distribution platform used by brands such as Forbes, Hearst and Bloomberg media. Its ability to increase audience reach, engagement and revenue performance is key to its partnership with hundreds of media brands."
                            companyPhoto="https://assets.entrepreneur.com/static/tcc/profile/TCC_Maz_1920x1080.png?width=550"
                            foundingYear="2010"
                            usEmployees="37"
                            website="http://www.mazsystems.com"

                        />



                        <Company
                            id="fourth-li"
                            index="4"
                            logo="https://assets.entrepreneur.com/static/tcc/logos/TCC_Choozle_300x300.png?width=80"
                            name="Choozle"
                            flag="https://assets.entrepreneur.com/static/20180907100341-flag-america-01.svg"
                            location="Denver, Colo."
                            sector="Advertising Technology and Software"

                            about="Choozle provides digital advertising software that leverages detailed consumer data to power programmatic advertising campaigns across display, video, mobile and other mediums - all from a single, intuitive interface."
                            companyPhoto="https://assets.entrepreneur.com/static/tcc/profile/TCC_Choozle_1920x1080_.png?width=550"
                            foundingYear="2012"
                            usEmployees="60"
                            website="https://choozle.com"

                        />

                        <Company
                            id="fifth-li"
                            index="5"
                            logo="https://assets.entrepreneur.com/static/tcc/logos/TCC_Vuesol_Logo_300x300.png?width=80"
                            name="Vuesol Technologies"
                            flag="https://assets.entrepreneur.com/static/20180907100341-flag-america-01.svg"
                            location="Alpharetta, Ga."
                            sector="IT Services Provider"

                            about="Vuesol Technologies is a global technology services and outsourcing provider that is committed to helping customers align technology innovation with business strategy. Vuesol has been offering Fortune 500 and mid-size clients achieve their business goals by providing a full spectrum of technology services and high quality IT talent globally."
                            companyPhoto="https://assets.entrepreneur.com/static/tcc/profile/TCC_Vuesol_1920x1080_.png?width=550"
                            foundingYear="2015"
                            usEmployees="43"
                            website="http://www.vuesol.com"

                        />


                        <Company
                            id="sixth-li"
                            index="6"
                            logo="https://assets.entrepreneur.com/static/tcc/logos/TCC_Scribe_Media_LLC_Logo_300x300.png?width=80"
                            name="Scribe Media"
                            flag="https://assets.entrepreneur.com/static/20180907100341-flag-america-01.svg"
                            location="Austin, Texas"
                            sector="Publishing"

                            about="Scribe helps professionals share their knowledge by turning their ideas into professionally published books and speeches. Its clients include Fortune 500 CEOs and executives, doctors, lawyers, financial advisors, high level consultants and entrepreneurs."
                            companyPhoto="https://assets.entrepreneur.com/static/tcc/profile/TCC_ScribeMedia_1920x1080.png?width=550"
                            foundingYear="2014"
                            usEmployees="35"
                            website="https://scribemedia.com/"

                        />




                        <Company
                            id="seventh-li"
                            index="7"
                            logo="https://assets.entrepreneur.com/static/tcc/logos/TCC_Hughes_Marino_Logo_300x300.png?width=80"
                            name="Hughes Marino"
                            flag="https://assets.entrepreneur.com/static/20180907100341-flag-america-01.svg"
                            location="San Diego, Calif."
                            sector="Commercial Real Estate"

                            about="Hughes Marino is a real estate firm that exclusively represents tenants and buyers -- never landlords -- so it never has a conflict of interest. With offices across the nation, Hughes Marino has been helping companies lease, buy and build commercial space for over 25 years."
                            companyPhoto="https://assets.entrepreneur.com/static/tcc/profile/TCC_HughesMarino_1920x1080.jpg?width=550"
                            foundingYear="2011"
                            usEmployees="74"
                            website="http://hughesmarino.com/"

                        />



                        <Company
                            id="eight-li"
                            index="8"
                            logo="https://assets.entrepreneur.com/static/tcc/logos/TCC_MAZ_Logo_300x300.png?width=80"
                            name="Maz"
                            flag="https://assets.entrepreneur.com/static/20180907100341-flag-america-01.svg"
                            location="New York, N.Y."
                            sector="Content Logistics"

                            about="Maz has built a content distribution platform used by brands such as Forbes, Hearst and Bloomberg media. Its ability to increase audience reach, engagement and revenue performance is key to its partnership with hundreds of media brands."
                            companyPhoto="https://assets.entrepreneur.com/static/tcc/profile/TCC_Maz_1920x1080.png?width=550"
                            foundingYear="2010"
                            usEmployees="37"
                            website="http://www.mazsystems.com"

                        />



                        <Company
                            id="ninth-li"
                            index="9"
                            logo="https://assets.entrepreneur.com/static/tcc/logos/TCC_Choozle_300x300.png?width=80"
                            name="Choozle"
                            flag="https://assets.entrepreneur.com/static/20180907100341-flag-america-01.svg"
                            location="Denver, Colo."
                            sector="Advertising Technology and Software"

                            about="Choozle provides digital advertising software that leverages detailed consumer data to power programmatic advertising campaigns across display, video, mobile and other mediums - all from a single, intuitive interface."
                            companyPhoto="https://assets.entrepreneur.com/static/tcc/profile/TCC_Choozle_1920x1080_.png?width=550"
                            foundingYear="2012"
                            usEmployees="60"
                            website="https://choozle.com"

                        />

                        <Company
                            id="tenth-li"
                            index="10"
                            logo="https://assets.entrepreneur.com/static/tcc/logos/TCC_Vuesol_Logo_300x300.png?width=80"
                            name="Vuesol Technologies"
                            flag="https://assets.entrepreneur.com/static/20180907100341-flag-america-01.svg"
                            location="Alpharetta, Ga."
                            sector="IT Services Provider"

                            about="Vuesol Technologies is a global technology services and outsourcing provider that is committed to helping customers align technology innovation with business strategy. Vuesol has been offering Fortune 500 and mid-size clients achieve their business goals by providing a full spectrum of technology services and high quality IT talent globally."
                            companyPhoto="https://assets.entrepreneur.com/static/tcc/profile/TCC_Vuesol_1920x1080_.png?width=550"
                            foundingYear="2015"
                            usEmployees="43"
                            website="http://www.vuesol.com"

                        />




                    </ul>

                }
                {
                    className === 'mid' &&
                    <ul className="records">



                        <Company
                            id="first-li"
                            index="1"
                            logo="https://assets.entrepreneur.com/static/tcc/logos/TCC_Medium_8z-Real-Estate-Logo_300x300.png?width=80"
                            name="8z Real Estate"
                            flag="https://assets.entrepreneur.com/static/20180907100341-flag-america-01.svg"
                            location="Boulder, Colo."
                            sector="Agents / Brokers"

                            about="8z Real Estate is a real-estate brokerage firm that provides home buyers and sellers with market data and online tools, along with the knowledge and expertise of professionals on the ground."
                            companyPhoto="https://assets.entrepreneur.com/static/tcc/profile/TCC_8zRealEstate_1920x1080_MED.png?width=550"
                            foundingYear="2009"
                            usEmployees="159"
                            website="https://8z.com"

                        />

                        <Company
                            id="sec-li"
                            index="2"
                            logo="https://assets.entrepreneur.com/static/tcc/logos/TCC_Medium_ZURIXX_300x300.png?width=80"
                            name="Zurixx"
                            flag="https://assets.entrepreneur.com/static/20180907100341-flag-america-01.svg"
                            location="Cottonwood Heights, Utah"
                            sector="Financial Education"

                            about="Zurixx develops, promotes, sells and fulfills financial education programs throughout the United States and Canada. Its multi-phase educational process equips students with the tools, knowledge and resources they need to be financially successful. Zurixx partners with internationally-known celebrities from ABC, A&E, HGTV, and DIY Networks."
                            companyPhoto="https://assets.entrepreneur.com/static/tcc/profile/TCC_Zurixx_1920x1080_MED.png?width=550"
                            foundingYear="2012"
                            usEmployees="81"
                            website="http://www.zurixx.com"

                        />


                        <Company
                            id="third-li"
                            index="3"
                            logo="https://assets.entrepreneur.com/static/tcc/logos/TCC_Medium_Upside-Travel-Logo_300x300.png?width=80"
                            name="Upside Travel"
                            flag="https://assets.entrepreneur.com/static/20180907100341-flag-america-01.svg"
                            location="Washington, D.C."
                            sector="Travel / Vacation"

                            about="Upside is an online travel service exclusively for business travelers."
                            companyPhoto="https://assets.entrepreneur.com/static/tcc/profile/TCC_UpsideTravel_1920x1080_MED.png?width=550"
                            foundingYear="2015"
                            usEmployees="87"
                            website="http://www.upside.com"

                        />

                        <Company
                            id="fourth-li"
                            index="4"
                            logo="https://assets.entrepreneur.com/static/tcc/logos/TCC_Medium_CBH-Homes-Logo_300x300.png?width=80"
                            name="CBH Homes"
                            flag="https://assets.entrepreneur.com/static/20180907100341-flag-america-01.svg"
                            location="Meridian, Idaho"
                            sector="New Home Construction"

                            about="CBH Homes is a home builder and real-estate firm."
                            companyPhoto="https://assets.entrepreneur.com/static/tcc/profile/TCC_CBHHomes_1920x1080_MED.png?width=550"
                            foundingYear="1992"
                            usEmployees="89"
                            website="https://cbhhomes.com/"

                        />



                        <Company
                            id="fifth-li"
                            index="5"
                            logo="https://assets.entrepreneur.com/static/tcc/logos/TCC_Medium_N2-Publishing-Logo_300x300.png?width=80"
                            name="N2 Publishing"
                            flag="https://assets.entrepreneur.com/static/20180907100341-flag-america-01.svg"
                            location="Wilmington, N.C."
                            sector="Neighborhood Publications"

                            about="N2 Publishing produces neighborhood publications that create a sense of community and support local businesses."
                            companyPhoto="https://assets.entrepreneur.com/static/tcc/profile/TCC_N2Publishing_1920x1080_MED.png?width=550"
                            foundingYear="2004"
                            usEmployees="230"
                            website="https://n2pub.com/"

                        />

                        <Company
                            id="sixth-li"
                            index="6"
                            logo="https://assets.entrepreneur.com/static/tcc/logos/TCC_Medium_8z-Real-Estate-Logo_300x300.png?width=80"
                            name="8z Real Estate"
                            flag="https://assets.entrepreneur.com/static/20180907100341-flag-america-01.svg"
                            location="Boulder, Colo."
                            sector="Agents / Brokers"

                            about="8z Real Estate is a real-estate brokerage firm that provides home buyers and sellers with market data and online tools, along with the knowledge and expertise of professionals on the ground."
                            companyPhoto="https://assets.entrepreneur.com/static/tcc/profile/TCC_8zRealEstate_1920x1080_MED.png?width=550"
                            foundingYear="2009"
                            usEmployees="159"
                            website="https://8z.com"

                        />

                        <Company
                            id="seventh-li"
                            index="7"
                            logo="https://assets.entrepreneur.com/static/tcc/logos/TCC_Medium_ZURIXX_300x300.png?width=80"
                            name="Zurixx"
                            flag="https://assets.entrepreneur.com/static/20180907100341-flag-america-01.svg"
                            location="Cottonwood Heights, Utah"
                            sector="Financial Education"

                            about="Zurixx develops, promotes, sells and fulfills financial education programs throughout the United States and Canada. Its multi-phase educational process equips students with the tools, knowledge and resources they need to be financially successful. Zurixx partners with internationally-known celebrities from ABC, A&E, HGTV, and DIY Networks."
                            companyPhoto="https://assets.entrepreneur.com/static/tcc/profile/TCC_Zurixx_1920x1080_MED.png?width=550"
                            foundingYear="2012"
                            usEmployees="81"
                            website="http://www.zurixx.com"

                        />


                        <Company
                            id="eight-li"
                            index="8"
                            logo="https://assets.entrepreneur.com/static/tcc/logos/TCC_Medium_Upside-Travel-Logo_300x300.png?width=80"
                            name="Upside Travel"
                            flag="https://assets.entrepreneur.com/static/20180907100341-flag-america-01.svg"
                            location="Washington, D.C."
                            sector="Travel / Vacation"

                            about="Upside is an online travel service exclusively for business travelers."
                            companyPhoto="https://assets.entrepreneur.com/static/tcc/profile/TCC_UpsideTravel_1920x1080_MED.png?width=550"
                            foundingYear="2015"
                            usEmployees="87"
                            website="http://www.upside.com"

                        />

                        <Company
                            id="ninth-li"
                            index="9"
                            logo="https://assets.entrepreneur.com/static/tcc/logos/TCC_Medium_CBH-Homes-Logo_300x300.png?width=80"
                            name="CBH Homes"
                            flag="https://assets.entrepreneur.com/static/20180907100341-flag-america-01.svg"
                            location="Meridian, Idaho"
                            sector="New Home Construction"

                            about="CBH Homes is a home builder and real-estate firm."
                            companyPhoto="https://assets.entrepreneur.com/static/tcc/profile/TCC_CBHHomes_1920x1080_MED.png?width=550"
                            foundingYear="1992"
                            usEmployees="89"
                            website="https://cbhhomes.com/"

                        />



                        <Company
                            id="tenth-li"
                            index="10"
                            logo="https://assets.entrepreneur.com/static/tcc/logos/TCC_Medium_N2-Publishing-Logo_300x300.png?width=80"
                            name="N2 Publishing"
                            flag="https://assets.entrepreneur.com/static/20180907100341-flag-america-01.svg"
                            location="Wilmington, N.C."
                            sector="Neighborhood Publications"

                            about="N2 Publishing produces neighborhood publications that create a sense of community and support local businesses."
                            companyPhoto="https://assets.entrepreneur.com/static/tcc/profile/TCC_N2Publishing_1920x1080_MED.png?width=550"
                            foundingYear="2004"
                            usEmployees="230"
                            website="https://n2pub.com/"

                        />





                    </ul>

                }
                {
                    className === 'large' &&
                    <ul className="records">


                        <Company
                            id="first-li"
                            index="1"
                            logo="https://assets.entrepreneur.com/static/tcc/logos/TCC_Large_Goosehead_Insurance_Logo_300x300.png?width=80"
                            name="Goosehead Insurance"
                            flag="https://assets.entrepreneur.com/static/20180907100341-flag-america-01.svg"
                            location="Westlake, Texas"
                            sector="General Insurance"

                            about="Goosehead Insurance is an independent personal lines insurance agency. Goosehead represents more than 80 insurance companies that underwrite personal lines and small commercial lines risks, and its operations include a network of seven corporate sales offices and more than 400 franchise locations."
                            companyPhoto="https://assets.entrepreneur.com/static/tcc/profile/TCC_LARGE_GooseheadInsurance_1920x1080.png?width=550"
                            foundingYear="2013"
                            usEmployees="341"
                            website="https://www.gooseheadinsurance.com/"

                        />

                        <Company
                            id="sec-li"
                            index="2"
                            logo="https://assets.entrepreneur.com/static/tcc/logos/TCC_Large_Berkshire-Hathaway-Logo_300x300.png?width=80"
                            name="Berkshire Hathaway HomeServices Ambassador Real Estate"
                            flag="https://assets.entrepreneur.com/static/20180907100341-flag-america-01.svg"
                            location="Omaha, Neb."
                            sector="Agents and Brokers"

                            about="Berkshire Hathaway HomeServices Ambassador Real Estate offers real estate services that include relocation, fine homes, rentals, short sales, commercial and investment properties."
                            companyPhoto="https://assets.entrepreneur.com/static/tcc/profile/TCC_LARGE_BerkshireHathaway_1920x1080.png?width=550"
                            foundingYear="1984"
                            usEmployees="661"
                            website="https://www.bhhsamb.com/"

                        />

                        <Company
                            id="third-li"
                            index="3"
                            logo="https://assets.entrepreneur.com/static/tcc/logos/TCC_Large_HubSpot-Logo_300x300.png?width=80"
                            name="HubSpot"
                            flag="https://assets.entrepreneur.com/static/20180907100341-flag-america-01.svg"
                            location="Cambridge, Mass."
                            sector="B2B Software"

                            about="HubSpot is an inbound marketing, sales and CRM growth stack. HubSpot Marketing includes social media publishing and monitoring, blogging, SEO, website content management, email marketing, marketing automation and reporting and analytics. HubSpot Sales enables sales and service teams to have more effective conversations with leads, prospects and customers. HubSpot CRM helps sales teams organize, track and grow their pipeline."
                            companyPhoto="https://assets.entrepreneur.com/static/tcc/profile/TCC_LARGE_HubSpot_1920x1080.png?width=550"
                            foundingYear="2006"
                            usEmployees="1633"
                            website="https://www.hubspot.com/"

                        />


                        <Company
                            id="fourth-li"
                            index="4"
                            logo="https://assets.entrepreneur.com/static/tcc/logos/TCC_Large_Power-Home-Remodeling-Group_300x300.png?width=80"
                            name="Power Home Remodeling Group"
                            flag="https://assets.entrepreneur.com/static/20180907100341-flag-america-01.svg"
                            location="Chester, Pa."
                            sector="Home Improvement and Remodeling"

                            about="Power Home Remodeling Group is an exterior home remodeler. It provides energy-saving and environmentally friendly remodeling solutions to residents across its operating territories."
                            companyPhoto="https://assets.entrepreneur.com/static/tcc/profile/TCC_LARGE_PowerHomeRemodeling_1920x1080.png?width=550"
                            foundingYear="1992"
                            usEmployees="2284"
                            website="http://www.powerhrg.com"

                        />

                        <Company
                            id="fifth-li"
                            index="5"
                            logo="https://assets.entrepreneur.com/static/tcc/logos/TCC_Large_Curriculum-Associates_300x300.png?width=80"
                            name="Curriculum Associates"
                            flag="https://assets.entrepreneur.com/static/20180907100341-flag-america-01.svg"
                            location="North Billerica, Mass."
                            sector="Publishing"

                            about="Curriculum Associates focuses on a blended learning approach, evolving along with schools as they focus more on digital content. It designs print and online instructional materials, screens and assessments, along with data management tools to address the needs of today's student and help teachers save time in the classroom."
                            companyPhoto="https://assets.entrepreneur.com/static/tcc/profile/TCC_LARGE_PowerHomeRemodeling_1920x1080.png?width=550"
                            foundingYear="1969"
                            usEmployees="808"
                            website="https://www.curriculumassociates.com/"

                        />



                        <Company
                            id="sixth-li"
                            index="6"
                            logo="https://assets.entrepreneur.com/static/tcc/logos/TCC_Large_Goosehead_Insurance_Logo_300x300.png?width=80"
                            name="Goosehead Insurance"
                            flag="https://assets.entrepreneur.com/static/20180907100341-flag-america-01.svg"
                            location="Westlake, Texas"
                            sector="General Insurance"

                            about="Goosehead Insurance is an independent personal lines insurance agency. Goosehead represents more than 80 insurance companies that underwrite personal lines and small commercial lines risks, and its operations include a network of seven corporate sales offices and more than 400 franchise locations."
                            companyPhoto="https://assets.entrepreneur.com/static/tcc/profile/TCC_LARGE_GooseheadInsurance_1920x1080.png?width=550"
                            foundingYear="2013"
                            usEmployees="341"
                            website="https://www.gooseheadinsurance.com/"

                        />

                        <Company
                            id="seventh-li"
                            index="7"
                            logo="https://assets.entrepreneur.com/static/tcc/logos/TCC_Large_Berkshire-Hathaway-Logo_300x300.png?width=80"
                            name="Berkshire Hathaway HomeServices Ambassador Real Estate"
                            flag="https://assets.entrepreneur.com/static/20180907100341-flag-america-01.svg"
                            location="Omaha, Neb."
                            sector="Agents and Brokers"

                            about="Berkshire Hathaway HomeServices Ambassador Real Estate offers real estate services that include relocation, fine homes, rentals, short sales, commercial and investment properties."
                            companyPhoto="https://assets.entrepreneur.com/static/tcc/profile/TCC_LARGE_BerkshireHathaway_1920x1080.png?width=550"
                            foundingYear="1984"
                            usEmployees="661"
                            website="https://www.bhhsamb.com/"

                        />

                        <Company
                            id="eight-li"
                            index="8"
                            logo="https://assets.entrepreneur.com/static/tcc/logos/TCC_Large_HubSpot-Logo_300x300.png?width=80"
                            name="HubSpot"
                            flag="https://assets.entrepreneur.com/static/20180907100341-flag-america-01.svg"
                            location="Cambridge, Mass."
                            sector="B2B Software"

                            about="HubSpot is an inbound marketing, sales and CRM growth stack. HubSpot Marketing includes social media publishing and monitoring, blogging, SEO, website content management, email marketing, marketing automation and reporting and analytics. HubSpot Sales enables sales and service teams to have more effective conversations with leads, prospects and customers. HubSpot CRM helps sales teams organize, track and grow their pipeline."
                            companyPhoto="https://assets.entrepreneur.com/static/tcc/profile/TCC_LARGE_HubSpot_1920x1080.png?width=550"
                            foundingYear="2006"
                            usEmployees="1633"
                            website="https://www.hubspot.com/"

                        />


                        <Company
                            id="ninth-li"
                            index="9"
                            logo="https://assets.entrepreneur.com/static/tcc/logos/TCC_Large_Power-Home-Remodeling-Group_300x300.png?width=80"
                            name="Power Home Remodeling Group"
                            flag="https://assets.entrepreneur.com/static/20180907100341-flag-america-01.svg"
                            location="Chester, Pa."
                            sector="Home Improvement and Remodeling"

                            about="Power Home Remodeling Group is an exterior home remodeler. It provides energy-saving and environmentally friendly remodeling solutions to residents across its operating territories."
                            companyPhoto="https://assets.entrepreneur.com/static/tcc/profile/TCC_LARGE_PowerHomeRemodeling_1920x1080.png?width=550"
                            foundingYear="1992"
                            usEmployees="2284"
                            website="http://www.powerhrg.com"

                        />

                        <Company
                            id="tenth-li"
                            index="10"
                            logo="https://assets.entrepreneur.com/static/tcc/logos/TCC_Large_Curriculum-Associates_300x300.png?width=80"
                            name="Curriculum Associates"
                            flag="https://assets.entrepreneur.com/static/20180907100341-flag-america-01.svg"
                            location="North Billerica, Mass."
                            sector="Publishing"

                            about="Curriculum Associates focuses on a blended learning approach, evolving along with schools as they focus more on digital content. It designs print and online instructional materials, screens and assessments, along with data management tools to address the needs of today's student and help teachers save time in the classroom."
                            companyPhoto="https://assets.entrepreneur.com/static/tcc/profile/TCC_LARGE_PowerHomeRemodeling_1920x1080.png?width=550"
                            foundingYear="1969"
                            usEmployees="808"
                            website="https://www.curriculumassociates.com/"

                        />


                    </ul>

                }

            </div>
        </div>
    )
}

export default CompaniesList

