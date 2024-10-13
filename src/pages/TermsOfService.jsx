import styles from "./TermsOfService.module.css";

const TermsOfService = () => {
  return (
    <div className={styles.background}>
      <div className="main">
        <div className="center">
          <h2 className={styles.appellation}>
            CONSUMER TERMS OF SERVICE / BUYER AGREEMENT FOR CONFIRMED360.COM
          </h2>
          <hr className={styles.line} />
          <div className={styles.content}>
            <p>
              These terms and conditions (“Terms”) shall apply to all goods or
              services (“Services” or “Experience(s)”) ordered from or provided
              to you (“you,” “your,” or “Buyer”) by Confirmed LLC
              (“CONFIRMED360,” “we” or “us”). These Terms also apply to your
              access and use of the CONFIRMED360 website located at
              www.confirmed360.com(“Site”).{" "}
            </p>
            <strong>
              By accessing or using the Site, or by ordering any Services from
              CONFIRMED360, you agree that these Terms shall apply to your order
              and that you shall be bound to the Terms set forth herein.
            </strong>
            <p>
              If you don’t agree, then you are not permitted to use the
              Services. If you are accessing and using the Services on behalf of
              a company (such as your employer) or other legal entity, you
              represent and warrant that you have the authority to bind that
              company or other legal entity to these Terms. In that case, “you”
              and “your” will refer to that company or other legal entity.
            </p>
            <p>CHANGES TO THESE TERMS OR THE SERVICES</p>
            <p>
              We can change these Terms at any time. If we do so, we’ll let you
              know either by posting the changed Terms on the Site or through
              other communications. We’ll also update the “Last Updated Date” at
              the top of these Terms. It’s important that you review the changed
              Terms because if you continue to use the Services after we’ve
              provided notice of the change, you’re telling us that you agree to
              be bound by the changed Terms. If you don’t agree to be bound by
              the changed Terms then you’re not allowed to use the Services
              anymore. We’re always striving to make the Services better and
              because they’re evolving over time, we may change or discontinue
              all or any part of the Services, at any time and without notice,
              at our discretion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { TermsOfService };
