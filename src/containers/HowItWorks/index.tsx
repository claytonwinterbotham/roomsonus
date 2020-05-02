import React from 'react'
import piggyBank from '../../images/piggy_bank.svg'
import calendar from '../../images/calendar.svg'
import giftVoucher from '../../images/gift_voucher.svg'
import { HIWGrid, HIWSection, HIWGridItem, VoucherWrap, HIWHeading, HIWParagraph, HIWImage, HIWCTA } from './HowItWorks.style'


type HowItWorksProps = {
    
}


export const HowItWorks: React.FunctionComponent<HowItWorksProps> = ({
    
}) => {
    return(
        <HIWSection>
            <h1>How It Works</h1> 
            <HIWGrid>
                <HIWGridItem piggyBank={true}>
                    <HIWHeading >IF you like to Travel on a Budget...</HIWHeading><HIWImage src={piggyBank} alt=""/>
                </HIWGridItem>
                <HIWGridItem calendar={true}>
                    <HIWHeading>AND you can can travel on the dates we have available...</HIWHeading>
                    <HIWParagraph>And you think paying a small Activation Fee averaging $20 per night to cover Taxes and Booking Fees is Fair and Reasonable...</HIWParagraph>
                    <HIWImage src={calendar} alt="" />
                </HIWGridItem>
                <HIWGridItem voucher={true}>
                    <VoucherWrap>
                        <HIWHeading>THEN we will send you a Gift Certificate for a Complimentary Stay of your choice.</HIWHeading>
                        <HIWParagraph>The ROOM is on US! You can save Hundreds to Thousands of Dollars! Choose from one of the 50 Destinations below...</HIWParagraph>
                        <HIWImage src={giftVoucher} alt="" /><HIWCTA to="/search/">Search</HIWCTA>
                    </VoucherWrap>
                </HIWGridItem>
            </HIWGrid>
        </HIWSection>
    )
}
