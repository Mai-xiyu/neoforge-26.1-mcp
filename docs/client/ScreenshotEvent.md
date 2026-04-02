# ScreenshotEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ✅ Yes
**Extends:** `Event`

## Description

Fired when a screenshot is taken, but before it is written to disk.


This event is ICancellableEvent cancellable, and does not HasResult have a result.
If this event is cancelled, then the screenshot is not written to disk, and the message in the event will be posted
to the player's chat.


This event is fired on the NeoForge#EVENT_BUS main Forge event bus,
only on the LogicalSide#CLIENT logical client.
@see Screenshot

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `DEFAULT_CANCEL_REASON` | `Component` |  |
| `image` | `NativeImage` |  |
| `screenshotFile` | `File` |  |
| `resultMessage` | `Component` |  |
| `cancelMessage` | `Component` |  |

## Accessors

- `public NativeImage getImage()` 
- `public File getScreenshotFile()` 
- `public void setScreenshotFile(File screenshotFile)` 
- `public Component getResultMessage()` 
- `public void setResultMessage(Component resultMessage)` 
- `public Component getCancelMessage()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class ScreenshotHandler {
    @SubscribeEvent
    public static void onScreenshot(ScreenshotEvent event) {
        // Handle event
    }
}
```
