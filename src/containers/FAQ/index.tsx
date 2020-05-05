import React from 'react'
import { FAQSection, FAQGrid, FAQGridItem, FAQTitle, FAQHeading, FAQParagraph } from './FAQ.style'


type FAQProps = {
    
}


export const FAQ: React.FunctionComponent<FAQProps> = ({
    
}) => {
    return(
        <FAQSection id="faq">
            <FAQTitle>FAQ's</FAQTitle>  
            <FAQGrid>
                <FAQGridItem id="w-node-dcdd2f19567c-60baa390">
                    <FAQHeading>Who are we?</FAQHeading>
                    <FAQParagraph>
                        We&#x27;re an Affiliate for a Travel Incentive Company which partners with Industry insiders who have information not available to the public about unsold premium accommodations at must-see destinations in the U.S. and beyond. We work with these providers to secure these unsold rooms at exceptionally low prices.
                    </FAQParagraph>
                </FAQGridItem>
                <FAQGridItem id="w-node-1638f9af6b7f-60baa390">
                    <FAQHeading>How?</FAQHeading>
                    <FAQParagraph>
                        Hotels with unsold Inventory pay fixed costs whether the rooms are booked or not, and they are happy to have Guests like you who will spend money at the facility in the restaurants, the bars, the Spas and who will generate repeat business and referrals. It&#x27;s a Win-Win!
                    </FAQParagraph>
                </FAQGridItem>
                <FAQGridItem id="w-node-db3d698eac24-60baa390">
                    <FAQHeading>Any Catch?</FAQHeading>
                    <FAQParagraph>
                        In return, you accept some limitations on the dates when you can stay, weekends might cost a small surcharge IF they are available, you must Activate your certificate within SEVEN days of receiving it,you have 18 months to Book your stay after Activation, and you must give them 30 Days Advance Booking.
                    </FAQParagraph>
                </FAQGridItem>
                <FAQGridItem id="w-node-a7ba19da3fd5-60baa390">
                    <FAQHeading>Any Other Costs?</FAQHeading>
                    <FAQParagraph>
                        Obviously, you are expected to pay for your own Transportation costs, and for food and amenities once you check in. Resorts in places like Las Vegas, Hawaii, Miami and Mexico may have additional &quot;Resort Fees&quot; due at Check In to cover amenities like Wi-Fi, parking,and phone services, but they will disclose these to you at the time of booking. 95% of other destinations do not have such fees.
                    </FAQParagraph>
                </FAQGridItem>
                <FAQGridItem id="w-node-a7ba19da3fda-60baa390">
                    <FAQHeading>Other Deals?</FAQHeading>
                    <FAQParagraph>
                        If you are interested in Mexican Resorts which offer &quot;All-Inclusive&quot; packages including Food and Drinks for a small Upgrade fee, please let us know. There are also special packages available for Las Vegas, where Resort Fees and the 30-Day Advanced Booking requirements can be waived, and $100 in Casino Chips are provided as a Gift. Ask us about these by email.
                    </FAQParagraph>
                </FAQGridItem>
                <FAQGridItem id="w-node-a7ba19da3fdf-60baa390">
                    <FAQHeading>Any Restrictions?</FAQHeading>
                    <FAQParagraph>
                        There are some other minor restrictions on using these Certificates, such as limit of One Per Family, minimum Age Requirements, you can not Sell them, and you may not live within 100 Miles of the Destination which you select. <br/>‍<br/>Bookings are dependent upon Availability. Your activation fees are not refundable - given that you have 18 months in which to find available dates, and the availability often changes within a day or two, so don&#x27;t give up if the first time you call, you don&#x27;t get the exact dates that you want.
                    </FAQParagraph>
                </FAQGridItem>
            </FAQGrid>
        </FAQSection>
    )
}
