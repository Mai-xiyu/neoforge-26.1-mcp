# ClientResourceLoadFinishedEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Fires after the client has completed loading or reloading its resources
successfully.



When the client first starts up, this event is fired after the resource
load, but before the client has set up the initial screens, and before
we emit the first `ClientTickEvent`.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `initial` | `boolean` |  |

## Accessors

- `public boolean isInitial()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class ClientResourceLoadFinishedHandler {
    @SubscribeEvent
    public static void onClientResourceLoadFinished(ClientResourceLoadFinishedEvent event) {
        // Handle event
    }
}
```
