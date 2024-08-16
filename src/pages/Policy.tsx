
import { Link, useNavigate } from "react-router-dom";
import Wifi from "../assets/icons/wifi.svg"
import Shield from "../assets/icons/shield.svg"
import Connect from "../assets/icons/connect.svg"
import Bolt from "../assets/icons/bolt.svg"
import MemberOne from "../assets/images/member-1.svg"
import MemberTwo from "../assets/images/member-2.svg"
import MemberThree from "../assets/images/member-3.svg"
import MemberFour from "../assets/images/member-4.svg"
import MemberFive from "../assets/images/member-5.svg"
import Privacy from "../assets/images/privacy.svg"
import AboutLayout from "../layouts/AboutLayout";


const About = () => {

    const navigate = useNavigate()

    return (
        <AboutLayout showAbout={true}>

            <section className=" max-w-full  rounded-xl md:max-w-5xl xl:max-w-5xl mx-auto px-4 lg:px-0 py-4 my-10 relative h-[320px] flex flex-col items-start justify-center">
                <img src={Privacy} alt="" className="absolute w-full h-full top-0 object-cover md:object-contain left-0" />
                <h3 className="relative z-20 text-white text-3xl font-bold text-left pl-20" >Privacy Policy</h3>
            </section>

            <div className="my-10 bg-[#F5F5F7]">

                <section className=" max-w-full bg-white rounded-xl md:max-w-5xl xl:max-w-5xl mx-auto px-4 py-4">
                    <div className="p-3  gap-4 py-5">
                        <h5 className="text-xs text-[#FF7F00] font-[500]">PRIVACY POLICY</h5>

                        <h3 className="my-3 font-[600] text-xl">We (Connect, Surf and Smile limited) understand the importance of the privacy of our site visitors
                            (‘’you’’ or ‘’user’’) and the responsibility on us to protect your personal information. On that note, we have implemented the following measures known as the ‘‘privacy policy’’ regarding how we, our subsidiaries and affiliates collect data.
                        </h3>


                        <div className="my-10 md:w-3/4 text-sm text-[#8F8F8F]">

                            1. Information <br /> <br /> We Collect
                            We only collect information that you knowingly give us when you create an account, contact <br />
                            us, or otherwise access or use our Services. We will ensure that the information is not further <br />
                            processed in a manner that is incompatible with those purposes. You have a right to choose <br />
                            whether to provide the personal information or not. The information collected may include:  <br />  <br />
                            a. Contact information and personal details, such as your name, residential address,
                            business address and postal addresses, telephone number, email address, and next
                            of kin;  <br /> <br />
                            b. Profile information, such as the username and password you establish with the
                            Services; <br /> <br />
                            c. Demographic details, such as date of birth, country of citizenship and/or country of
                            residence, marital status; <br /> <br />
                            d. Government-issued identification (to the extent permitted under applicable law),
                            such as a national identification number (e.g., a Social Security Number, tax
                            identification number, or passport number), state or local identification number (e.g.,
                            a Driver’s License or other government-issued identification number), a copy of your
                            government-issued identification card and related government issued photographs;
                            e. PHCN bill, Tenancy Agreement, gender. <br /> <br />
                            f. Payment information, this includes credit card numbers and billing information. <br /> <br />
                            2. How Do We Use The Information We Collect? <br /> <br />
                            We use the information we collect to:
                            a. Deliver and improve the Services and your overall user experience; <br /> <br />
                            b. Protect against, investigate and deter fraudulent, unauthorized and/or illegal activity; <br /> <br />
                            c. Link or combine user information with other Personal Information; <br /> <br />
                            d. Compare and verify information for accuracy and update our records; <br /> <br />
                            e. Validate information for identity verification, including verification for anti-money
                            laundering and “Know Your Customer” protocols; <br /> <br />
                            f. Email, text message, message or otherwise contact you with information and updates
                            about us and the Services, and respond to your comments and questions if {`you've`}
                            provided us with the means to do so;<br /> <br />
                            g. On a de-identified, aggregated basis, analyze how you use the Services with tools like
                            Google Analytics to help us understand traffic patterns and know if there are
                            problems with the Services; and/or <br /> <br />
                            h. Create targeted advertising to promote the Services and engage our users. <br /> <br />
                            When visiting our website, we also store every instance of access in a log file and therefore,
                            the following Data are stored in this process:
                            a. Computer or mobile device information. <br /> <br />
                            b. Website from which our domain is accessed and website usage information. <br /> <br />
                            c. Operating system of your computer. <br /> <br />
                            d. Country from which our website is accessed. <br /> <br />
                            e. Date and time of access. <br /> <br />
                            f. IP address of the accessing computer. <br /> <br />
                            Keeping client’s information secure and using it only as our Users want us to, are matters of
                            principle for all of us at Connect, Surf and Smile limited. <br /> <br />
                            3. Do We Share Your Personal Information? <br /> <br />
                            We do not rent, sell, or share your Personal Information with third parties except with your
                            consent or as necessary to complete any transaction or provide any service you have requested
                            or authorized in this Policy.
                            In connection with the Services, we may provide your Personal Information to the following third
                            parties: <br /> <br />
                            a. Audits <br /> <br />
                            b. Service providers <br /> <br />
                            c. Payment providers <br /> <br />
                            d. Courts <br /> <br />
                            e. Law enforcement/regulatory bodies <br /> <br />
                            We may also transfer your Personal Information to a third party because of a merger, acquisition,
                            reorganization, or similar transaction; when required by law or to respond to legal process; to
                            protect our customers; to protect lives; to maintain the security of the Services; and/or to protect
                            our rights or property. In any such event, and to the extent legally permitted, we will notify you
                            and, if there are material changes in relation to the processing of your Personal Information, give
                            you an opportunity to consent to such changes. Any third party with whom we share your data
                            with will be required to provide the same or equal protection of such data as stated in this Policy.
                            We will also share Personal Information with third-party companies, organizations, or individuals
                            if we have a good faith belief that access, use, preservation, or disclosure of your Personal
                            Information is reasonably necessary to detect or protect against fraud or security issues, enforce
                            our terms of use, meet any enforceable government request, defend against legal claims, or
                            protect against harm or legal rights or safety. This may include the incorporation of your Personal
                            Information into databases maintained to validate information for identity verification, including
                            verification for anti-money laundering and “Know Your Customer” protocols. <br /> <br />
                            4. Updates and Changes
                            We reserve the right to change this Policy at any time. We will notify you of material changes
                            to this Policy by sending notice to the primary email address specified in your account or by
                            a prominent notice on our website. Changes and clarifications will take effect immediately.
                            You should periodically check our website, including the page on which this Policy is located,
                            for updates. You acknowledge that your continued use of our Services after we publish or
                            send a notice about our changes to this Policy means that the collection, use and/or sharing
                            of your Personal Information is subject to the updated Policy. <br /> <br />
                            5. Cookies
                            When you visit the Website, whether you register for an account, we may send one or more
                            cookies.
                            “Cookies” are small text files containing a string of alphanumeric characters that may be placed
                            on your web browser. Cookies make it easier for you to navigate our Website by, among other
                            things, “remembering” your identity so that you do not have to input your password multiple
                            times as you navigate between web pages on the Website and/or as you access the Services. This
                            use of cookies for authentication (i.e., verifying that you are who you say you are) is an essential
                            component of site security. You can set your web browser to inform you when cookies are set or
                            to prevent cookies from being set.
                            A “web beacon” is typically a transparent graphic image (usually 1 pixel x 1 pixel) that is placed
                            on a site or in an email which allows the website to record the simple actions of the user opening
                            the page that contains the beacon.
                            “Server logs” can be either a single log file or several log files automatically created and
                            maintained by a server of activity performed by the server, which can include information about
                            any transaction you conduct with the server.
                            Please note that if you decline to use cookies, you may experience reduced functionality or
                            slower site response times. Declining to use our authentication-related cookies may prevent you
                            from using the Website altogether. <br /> <br />
                            6. How Do We Secure Your Personal Information?
                            Your account is protected by a password for your privacy and security. You must prevent
                            unauthorized access to your account and Personal Information by selecting and protecting your
                            password and/or other sign-in mechanism appropriately and limiting access to your phone or
                            device and browser, including by signing off after you have finished accessing your account.
                            As part of our processes, we take reasonable measures to regularly identify all reasonably
                            foreseeable internal and external risk to personal data in our possession or under our control and
                            implement reasonable and appropriate technical, physical, and organizational security measures
                            to protect against identified risks. <br /> <br />
                            7. Use of Credit Card Information
                            If you give us credit card information, we use it solely to check your financial qualifications and
                            collect payment from you. We use a third-party service provider to manage credit card
                            processing. This service provider is not permitted to store, retain, or use information you provide
                            except for the sole purpose of credit card processing on our behalf. <br /> <br />
                            8. Changing Or Deleting Your Personal Data
                            All users may review, update, correct or delete the Personal Information furnished by a user by
                            contacting us at customercare@connectsurfsmile.com or, in certain cases, by accessing your user
                            account. If you completely and permanently delete all your Personal Information, then your user
                            account will be deactivated. If you wish to cancel your account, you may do so by emailing
                            customercare@connectsurfsmile.com, and any Personal Information associated with your account will
                            be deleted as soon as is reasonably practical or as required by applicable law, subject to our data
                            retention policy. <br /> <br />
                            9. Data Retention
                            We retain information we receive for as long as you use the Services or as necessary to fulfil the
                            purposes for which it was collected, provide our Services, resolve disputes, establish legal
                            defences, enforce our agreements, and comply with applicable laws. We may retain information
                            that is otherwise deleted in anonymized and aggregated form, in archived or backup copies as
                            required pursuant to records retention obligations or otherwise as required by law. We may
                            retain an archived copy of your records as required by law or for legitimate business purposes. <br /> <br />
                            10. Links to Third Party Websites
                            We may provide links to third-party websites. We have no control over these websites, and they
                            are subject to their own terms of use and privacy policies. As such, we do not endorse and are
                            not responsible for the availability of, or for any content, advertising, products, or other materials
                            on or available from, these third-party websites. By using the Services, you agree that we will not
                            be liable for any damage or loss caused by your use of or reliance on any content, advertising,
                            products, or other materials on or available from these third-party websites. <br /> <br />
                            11. How do we Handle Personal Data Breaches
                            While we implement reasonable measures to prevent or reduce the likelihood of personal data
                            breaches, this risk cannot be completely eliminated. If we become aware of, or reasonably
                            suspect a personal data breach has occurred, we will adhere to incident management policies
                            governing the handling and reporting of personal data breaches within 72 hours of knowledge of
                            such breach to NITDA. <br /> <br />
                            12. Voluntary Service Suspension
                            Voluntary service suspension will only be granted via email to hello@connectsurfsmile.com.
                            Failure to contact the customer service centre for voluntary service suspension when service is
                            not in use will result to the customer paying for an outright monthly recurrent cost. <br /> <br />
                            13. Compensation Policy
                            In the event of planned and unplanned maintenance and outages less than 24 hours, no
                            monetary or lost hours compensation would be granted. However, when such maintenance
                            extends beyond 24 hours per time customers would be reimbursed by having their service end
                            date extended.
                            Lost days due to technical issues or device failure will be treated on case-by-case basis, hence
                            compensation would be calculated from when the complaint was reported to the contact centre,
                            to when the complaint was resolved. <br /> <br />
                            14. Refund and Cancellation Policy?:
                            Connect, Surf and Smile will process a refund if you cancel before automatic monthly renewal,
                            and we go ahead to still debit you.
                            To process a full refund, please kindly submit a refund request via our customer help email
                            address: hello@connectsurfsmile.com within 14 days of debit. Refunds will not be process if
                            requested after these 14 days period.
                            To cancel any subscription, kindly visit your payment section on your profile and click on the
                            cancel subscription button. If you cancel your subscription, you will continue to have access until
                            the end of the subscription period currently paid for and will not be billed for the next billing
                            cycle. <br /> <br />
                            15. How to Contact Us <br /> <br />
                            If you have any questions about this Policy, your Personal Information, or the Services, you
                            can hello@connectsurfsmile.com. <br /> <br />
                            1. Refund and Cancellation Policy?:
                            Connect, Surf and Smile will process a refund if you cancel before automatic monthly renewal,
                            and we go ahead to still debit you.
                            To process a full refund, please kindly submit a refund request via our customer help email
                            address: hello@connectsurfsmile.com within 14 days of debit. Refunds will not be process if
                            requested after these 14 days period.
                            To cancel any subscription, kindly visit your payment section on your profile and click on the
                            cancel subscription button. If you cancel your subscription, you will continue to have access until
                            the end of the subscription period currently paid for and will not be billed for the next billing
                            cycle.
                        </div>

                    </div>
                </section>
            </div>
        </AboutLayout>
    );
}

export default About

