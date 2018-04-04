# Tech Test #

This is a simple app that gives you Checkbox and Label components with the same behavior as they html friends.

## Checkbox ##

Checkbox component has **id** property that connect it with corresponding Label Component
You can check it, by clicking on Component or, label connected with him

```js
<Checkbox
    id="some_id"
/>
```

## Label ##

Label component has **for** property that connect it with corresponding Checkbox Component
By clicking on label you are able to check Checkbox connected with this label.

```js
<Label
    for="some_id"
>
    Text here
</Label>
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.