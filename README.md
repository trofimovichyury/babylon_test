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