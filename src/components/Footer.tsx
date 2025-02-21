import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="py-12 ">
        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          © 2025 TrueFeedBack -{" "}
          <Link
            href={"https://linkedin.com/in/umarfarooqdev7390"}
            className="text-accent-foreground underline"
          >
            Umar Farooq
          </Link>
          . All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
