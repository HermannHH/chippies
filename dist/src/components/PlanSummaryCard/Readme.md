PlanSummaryCard example:

```js
<PlanSummaryCard
  name="FREE"
  amount="$0"
  entityVsTerm="user/month"
  explainer="For hobbyists and individual developers evaluating Extend."
  buttonText="GET STARTED"
  buttonAction={() => alert("action needed")}
  image={
    <ProgressiveImage src="https://picsum.photos/200/300/?random" rounded />
  }
/>
```

PlanSummaryCard inavtive example:

```js
<PlanSummaryCard
  name="FREE"
  explainer="For hobbyists and individual developers evaluating Extend."
  buttonText="GET STARTED"
  buttonAction={() => alert("action needed")}
  image={
    <ProgressiveImage src="https://picsum.photos/200/300/?random" rounded />
  }
  waitingButtonText="Join waiting list"
  waitingButtonAction={() => alert("action needed")}
/>
```
