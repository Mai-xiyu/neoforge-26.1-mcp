# TelemetryInfoScreen

**Package:** `net.minecraft.client.gui.screens.telemetry`
**Type:** class
**Extends:** `Screen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### TelemetryInfoScreen

```java
public TelemetryInfoScreen(Screen p_261720_, Options p_262019_)
```

**Parameters:**

- `p_261720_` (`Screen`)
- `p_262019_` (`Options`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getNarrationMessage

```java
public Component getNarrationMessage()
```

**Returns:** `Component`

### init

```java
protected void init()
```

### repositionElements

```java
protected void repositionElements()
```

### setInitialFocus

```java
protected void setInitialFocus()
```

### createTelemetryCheckbox

```java
private AbstractWidget createTelemetryCheckbox()
```

**Returns:** `private AbstractWidget`

### onOptInChanged

```java
private void onOptInChanged(AbstractWidget p_309196_, boolean p_309095_)
```

**Parameters:**

- `p_309196_` (`AbstractWidget`)
- `p_309095_` (`boolean`)

**Returns:** `private void`

### openPrivacyStatementLink

```java
private void openPrivacyStatementLink(Button p_295613_)
```

**Parameters:**

- `p_295613_` (`Button`)

**Returns:** `private void`

### openFeedbackLink

```java
private void openFeedbackLink(Button p_261531_)
```

**Parameters:**

- `p_261531_` (`Button`)

**Returns:** `private void`

### openDataFolder

```java
private void openDataFolder(Button p_261840_)
```

**Parameters:**

- `p_261840_` (`Button`)

**Returns:** `private void`

### onClose

```java
public void onClose()
```
