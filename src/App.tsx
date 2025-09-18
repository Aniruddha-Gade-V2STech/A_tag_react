import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col gap-14">
        {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}

        <a href="boapp://customer/Loan/view/123">
          Open Customer App (boapp://customer/Loan/view/123){" "}
        </a>

        <a href="boapp://customer/Customer-Onboarding/view/123">
          Open Customer App (boapp://customer/Customer-Onboarding/view/123){" "}
        </a>

        <a href="intent://customer/Loan/view/123#Intent;scheme=boapp;package=com.v2stech.backoffice;end">
          Open Customer App
          (intent://customer/Loan/view/123#Intent;scheme=boapp;package=com.v2stech.backoffice;end)
        </a>

        <a href="intent://customer/Customer-Onboarding/view/123#Intent;scheme=boapp;package=com.v2stech.backoffice;end">
          Open Customer App
          (intent://customer/Customer-Onboarding/view/123#Intent;scheme=boapp;package=com.v2stech.backoffice;end)
        </a>
      </div>
    </>
  );
}

export default App;
