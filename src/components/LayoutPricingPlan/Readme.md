LayoutPricingPlan example:

```js
<div style={{ border: "thin solid red" }}>
  <LayoutPricingPlan
    summaryOne={
      <PlanSummaryCard
        name="FREE"
        amount="$0"
        entityVsTerm="user/month"
        explainer="For hobbyists and individual developers evaluating Extend."
        buttonText="GET STARTED"
        buttonAction={() => alert("action needed")}
      />
    }
    summaryTwo={
      <PlanSummaryCard
        name="FREE"
        amount="$0"
        entityVsTerm="user/month"
        explainer="For hobbyists and individual developers evaluating Extend."
        buttonText="GET STARTED"
        buttonAction={() => alert("action needed")}
      />
    }
    summaryThree={
      <PlanSummaryCard
        name="FREE"
        amount="$0"
        entityVsTerm="user/month"
        explainer="For hobbyists and individual developers evaluating Extend."
        buttonText="GET STARTED"
        buttonAction={() => alert("action needed")}
        style={{ flex: "1" }}
      />
    }
    featureTable={<h1>featureTable</h1>}
  />
</div>
```
