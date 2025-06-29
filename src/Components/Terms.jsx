import React from "react";
 const Terms = () => {
  return (
    <div>
      <h2 className="sm:text-2xl text-xl mt-27 text-blue-500">
        <strong>Terms and Condition</strong>
      </h2>
      <ol className="list-decimal pl-6 space-y-2 sm:text-xl text-base mb-25">
        <li>
          The responsibility of our company will remain till the verification of
          your documents, after that whether you do it or not, leave it any time
          later, its responsibility will be yours.
        </li>
        <li>Be honest and dedicated for better future opportunities.</li>
        <li>
          Your registration is only valid for 1 year. It is compulsory to
          register again after 1 year.
        </li>
        <li>No refundable registration Fee.</li>
        <li>
          {" "}
          SPH Universe Company will not take any responsibility in case of
          payment or any other type of problem.
        </li>
        <li>
          If you create any kind of mental pressure on the company, appropriate
          action will be taken against you.
        </li>
        <li>
          If you have any questions about these Terms and Conditions, please
          contact us at{" "}
          <a href="mailto:pcsmartclasses@gmail.com">pcsmartclasses@gmail.com</a>
          .
        </li>
      </ol>
    </div>
  );
};

export default Terms;