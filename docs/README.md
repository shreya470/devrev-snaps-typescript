    [WIP]

Snap-in Development

Version 1.0.2

Date: 2023-03-08


## 

Table of contents 

[Concepts](https://docs.google.com/document/d/1U7_6TgE9P18NGkz_9Zb9bQiukQ0-KdjayvOxG28H4qU/edit#heading=h.hgkxwy8p854b)

[Snap-in platform](https://docs.google.com/document/d/1U7_6TgE9P18NGkz_9Zb9bQiukQ0-KdjayvOxG28H4qU/edit#heading=h.sze7i5ydcw73)

[Snap-In](https://docs.google.com/document/d/1U7_6TgE9P18NGkz_9Zb9bQiukQ0-KdjayvOxG28H4qU/edit#heading=h.yhwgjk85znqq)

[Snap-In Package](https://docs.google.com/document/d/1U7_6TgE9P18NGkz_9Zb9bQiukQ0-KdjayvOxG28H4qU/edit#heading=h.84xqwqnch6y6)

[Snap-In Package Version](https://docs.google.com/document/d/1U7_6TgE9P18NGkz_9Zb9bQiukQ0-KdjayvOxG28H4qU/edit#heading=h.5y7dwzt24zta)

[Automation](https://docs.google.com/document/d/1U7_6TgE9P18NGkz_9Zb9bQiukQ0-KdjayvOxG28H4qU/edit#heading=h.mv8odnbkuie7)

[Connection](https://docs.google.com/document/d/1U7_6TgE9P18NGkz_9Zb9bQiukQ0-KdjayvOxG28H4qU/edit#heading=h.1dz4qaadiojy)

[Event Source](https://docs.google.com/document/d/1U7_6TgE9P18NGkz_9Zb9bQiukQ0-KdjayvOxG28H4qU/edit#heading=h.4v35t8wh2y5a)

[Function](https://docs.google.com/document/d/1U7_6TgE9P18NGkz_9Zb9bQiukQ0-KdjayvOxG28H4qU/edit#heading=h.ngr773w85x86)

[Globals](https://docs.google.com/document/d/1U7_6TgE9P18NGkz_9Zb9bQiukQ0-KdjayvOxG28H4qU/edit#heading=h.hldnzjo6tpll)

[Function storage](https://docs.google.com/document/d/1U7_6TgE9P18NGkz_9Zb9bQiukQ0-KdjayvOxG28H4qU/edit#heading=h.hn5h6223gcd4)

[SnapKit](https://docs.google.com/document/d/1U7_6TgE9P18NGkz_9Zb9bQiukQ0-KdjayvOxG28H4qU/edit#heading=h.8tdfzi7g6vom)

[Marketplace](https://docs.google.com/document/d/1U7_6TgE9P18NGkz_9Zb9bQiukQ0-KdjayvOxG28H4qU/edit#heading=h.susmpr20irec)

[Personas](https://docs.google.com/document/d/1U7_6TgE9P18NGkz_9Zb9bQiukQ0-KdjayvOxG28H4qU/edit#heading=h.a3y22qlbzat8)

[Developer](https://docs.google.com/document/d/1U7_6TgE9P18NGkz_9Zb9bQiukQ0-KdjayvOxG28H4qU/edit#heading=h.q562q0kkiz60)

[Publisher](https://docs.google.com/document/d/1U7_6TgE9P18NGkz_9Zb9bQiukQ0-KdjayvOxG28H4qU/edit#heading=h.yqvsbaj2zv0x)

[Installer](https://docs.google.com/document/d/1U7_6TgE9P18NGkz_9Zb9bQiukQ0-KdjayvOxG28H4qU/edit#heading=h.ic8e60eaz6xh)

[Develop and Deploy a Snap-in](https://docs.google.com/document/d/1U7_6TgE9P18NGkz_9Zb9bQiukQ0-KdjayvOxG28H4qU/edit#heading=h.rstx161vnc1q)

[Prerequisites](https://docs.google.com/document/d/1U7_6TgE9P18NGkz_9Zb9bQiukQ0-KdjayvOxG28H4qU/edit#heading=h.vn47j0plyfbd)

[Snap-in Manifest](https://docs.google.com/document/d/1U7_6TgE9P18NGkz_9Zb9bQiukQ0-KdjayvOxG28H4qU/edit#heading=h.tdw6ifhw9sft)

[Connections](https://docs.google.com/document/d/1U7_6TgE9P18NGkz_9Zb9bQiukQ0-KdjayvOxG28H4qU/edit#heading=h.ukvko3usb5g4)

[Event sources](https://docs.google.com/document/d/1U7_6TgE9P18NGkz_9Zb9bQiukQ0-KdjayvOxG28H4qU/edit#heading=h.638h0urkxh6v)

[Globals](https://docs.google.com/document/d/1U7_6TgE9P18NGkz_9Zb9bQiukQ0-KdjayvOxG28H4qU/edit#heading=h.gl6wduqzdkwi)

[Tags](https://docs.google.com/document/d/1U7_6TgE9P18NGkz_9Zb9bQiukQ0-KdjayvOxG28H4qU/edit#heading=h.vnovo59zhoqb)

[Functions](https://docs.google.com/document/d/1U7_6TgE9P18NGkz_9Zb9bQiukQ0-KdjayvOxG28H4qU/edit#heading=h.qu2p9ilzo1v9)

[Automations](https://docs.google.com/document/d/1U7_6TgE9P18NGkz_9Zb9bQiukQ0-KdjayvOxG28H4qU/edit#heading=h.cpsge8pqtrrh)

[Create a snap-in](https://docs.google.com/document/d/1U7_6TgE9P18NGkz_9Zb9bQiukQ0-KdjayvOxG28H4qU/edit#heading=h.jadm4ovt26y0)

[Clone the example code repository](https://docs.google.com/document/d/1U7_6TgE9P18NGkz_9Zb9bQiukQ0-KdjayvOxG28H4qU/edit#heading=h.3ysy8ray7lv)

[Create a tar.gz archive](https://docs.google.com/document/d/1U7_6TgE9P18NGkz_9Zb9bQiukQ0-KdjayvOxG28H4qU/edit#heading=h.s5yf0epizyq5)

[Create a snap-in package](https://docs.google.com/document/d/1U7_6TgE9P18NGkz_9Zb9bQiukQ0-KdjayvOxG28H4qU/edit#heading=h.qbi0ps2cw74h)

[Create a snap-in version](https://docs.google.com/document/d/1U7_6TgE9P18NGkz_9Zb9bQiukQ0-KdjayvOxG28H4qU/edit#heading=h.b6xr815i7pu6)

[Install the snap-in](https://docs.google.com/document/d/1U7_6TgE9P18NGkz_9Zb9bQiukQ0-KdjayvOxG28H4qU/edit#heading=h.fu13ip7idi3w)

[Configure the snap-in](https://docs.google.com/document/d/1U7_6TgE9P18NGkz_9Zb9bQiukQ0-KdjayvOxG28H4qU/edit#heading=h.ldad0gxedlqm)

[Update the snap-in draft state with the specific inputs](https://docs.google.com/document/d/1U7_6TgE9P18NGkz_9Zb9bQiukQ0-KdjayvOxG28H4qU/edit#heading=h.vmkqkwxkxqqj)

[Deploy the configured snap-in](https://docs.google.com/document/d/1U7_6TgE9P18NGkz_9Zb9bQiukQ0-KdjayvOxG28H4qU/edit#heading=h.zfeszkflpygt)

[Debugging Snap-in](https://docs.google.com/document/d/1U7_6TgE9P18NGkz_9Zb9bQiukQ0-KdjayvOxG28H4qU/edit#heading=h.nucnzpp75kgl)

[Debugging CLI calls](https://docs.google.com/document/d/1U7_6TgE9P18NGkz_9Zb9bQiukQ0-KdjayvOxG28H4qU/edit#heading=h.iyxluns04ctw)

[Debugging Lambda](https://docs.google.com/document/d/1U7_6TgE9P18NGkz_9Zb9bQiukQ0-KdjayvOxG28H4qU/edit#heading=h.4mefrfayqimr)

[Connections](https://docs.google.com/document/d/1U7_6TgE9P18NGkz_9Zb9bQiukQ0-KdjayvOxG28H4qU/edit#heading=h.glsqrs27kwjh)

[DevRev Conversations](https://docs.google.com/document/d/1U7_6TgE9P18NGkz_9Zb9bQiukQ0-KdjayvOxG28H4qU/edit#heading=h.it7jla12xm5i)

[Adding your flow code to dev](https://docs.google.com/document/d/1U7_6TgE9P18NGkz_9Zb9bQiukQ0-KdjayvOxG28H4qU/edit#heading=h.wxk3tr8fi6eo)

[Resources](https://docs.google.com/document/d/1U7_6TgE9P18NGkz_9Zb9bQiukQ0-KdjayvOxG28H4qU/edit#heading=h.1nq48hbvtej7)


## 


# Concepts


## Snap-in platform

The platform that is managing snap-in packages and installed snap-ins. It provides several functions for snap-ins: registration, validation, deployment of the functions, creation of other DevRev objects, registration of event sources/webhooks, and triggering functions with event payload enriched with the context.


## Snap-In

A snap-in is a collection of DevRev objects that work together to extend the value offered by the core DevRev platform. These objects can be automations, event sources, connections, custom types, vistas, etc.  A snap-in developer doesn’t need to make any changes in the core DevRev platform thus enabling true “arms-length” development.

The snap-in developer interacts with DevRev objects through APIs, gets updates on DevRev objects through webhooks, and can subscribe to Github/Slack/any external event by registering an event source. 


### Snap-In Package

A declarative collection of DevRev objects and their relationships that describes the functionality of the developed snap-in. This snap-in package object does not reference any object in the installer’s DevOrg. It is a parent object collecting snap-in package versions. 


#### Snap-In Package Version

A snap-in package version is the definition of a snap-in. It is not scoped to any DevOrg. This is equivalent to the source code for a snap-in. When a snap-in version is installed, it requires certain inputs from the person installing it such as PAT for Github or registering a URL on Bitbucket, etc. 

A snap-in developer may not be able to specify the exact URL to subscribe on Github but they can specify the required inputs for the snap-in to be installed.

A snap-in developer can also choose to have some input configuration that can be used by the person installing it to customize the Snap-In as per their preferences.


## Automation

The automation links a list of event sources to a function. This way whenever we have events available on the event source, it triggers the function and passes the payload of the event. When a snap-in requires a connection to any API where authentication is required, the event payload will carry all required API access tokens.


### Connection

Backed by the keyring object, a connection provides the OAuth authentication, access token refreshment, and storage for the secrets (access token, refresh token, PAT, API key, etc). Once the user has created the connection, the platform will automatically refresh the OAuth access token whenever required. Secrets can be referenced by other objects to access external and/or DevRev-protected APIs. The platform may use a connection to automatically register the webhook URL with an external source. A connection may also be used by an automation to pass the secret value to the corresponding function.


### Event Source

Event sources are the inlets for collecting events. These events can be emitted from webhooks, emails, timer-based API calls, or manually published. In the DevRev platform, you have support to ingest webhooks from any source. Each event source is scoped to a DevOrg.

For example, if you want to ingest webhook events from an organization’s Github, you can create an event source which in turn gives us a URL to subscribe to on Github. 

Any webhook events emitted and published to this URL will be available from this event source.


### Function

Functions are the framework for executing untrusted user-provided code. We currently have support for taking Javascript/TypeScript as input from the user and deploying it as a function.

A function can be passed connection values at runtime which can enable it to execute API calls to DevRev and to external systems such as GitHub, Slack, Bitbucket, Discord, etc.


#### Globals

Each snap-in may have some configuration to drive its behavior. The configuration may be used to enable/disable features, provide a custom string to be used, or any other defined input from the installer.


#### Function storage

Function can store its results in any DevRev object it has access to. Usually, it would use custom objects and/or custom fields for existing objects. The snap-in platform will create custom objects and fields as defined in the snap-in package. Those can be then used by the functions to store and retrieve the data.


### Command

Commands can show up on different surfaces and be triggered by the user along with some parameters. A command will have a function attached to it which will be triggered once the command is executed.

Developers can define commands as part of the snap-in version along with associated functions and the command will be installed when the snap-in is installed.

A command will have access to the connections, global variables and event sources created as part of the snap-in.


### SnapKit

SnapKit defines the UI customization components. It is defined as part of the snap-in package and used to display developer-defined components. A snapKit component can present data to the user or may collect the user's input and trigger a function.


## Marketplace

DevRev portal where DevRev and external developers can publish Snap-Ins and other extensions to DevRev. Link: <https://marketplace.devrev.ai/marketplace> 

**NOTE**: there can be private marketplaces as well which are scoped to a DevOrg and a DevOrg can use it to publish their own custom Snap-Ins.


## Personas


### Developer

Snap-In Package developers can be DevRev engineers, DevRev external contractors, or engineers not related to DevRev. This persona is responsible for creating, testing, and maintaining the Snap-In.


### Publisher

DevOrg of the developer responsible for publishing the Snap-In on the marketplace. The publisher is responsible for providing support to the snap-in users. 


### Installer

The user installing the snap-in in their DevOrg. They are responsible for installing the snap-in, providing it with the required configuration inputs, setting up the required connections, and configuring the webhooks on external apps.


# Develop and Deploy a Snap-in

1. Create the snap-in manifest file.

An example manifest file to listen for GitHub events to perform an action in DevRev and listen for DevRev events to perform another action in DevRev could be seen [here](https://github.com/devrev/flow-lambda-poc/blob/main/e2e-snapin-multiple-functions/manifest.yaml).

2. Create a snap-in. Prepare an archive with your functions code. An example of the archive containing functions code for the above manifest can be seen [here](https://github.com/devrev/flow-lambda-poc/blob/main/e2e-snapin-multiple-functions/arhive.tar.gz)
3. Install your snap-in in the created DevOrg.
4. Deploy the snap-in. 

We will use the example [here](https://github.com/devrev/flow-lambda-poc/tree/987e8881bb16012fcc56a1b031471776b7a72c30/e2e-snapin-multiple-functions) to walk through the process of deploying a snap-in package and version as well as installing it.


## Prerequisites

1. Install DevRev CLI - [https://github.com/devrev/devrev-cli/#build-and-install ](https://github.com/devrev/devrev-cli/#build-and-install)
2. Install jq - <https://stedolan.github.io/jq/> 
3. Create a DevOrg on DevRev Dev environment - <https://app.dev.devrev-eng.ai/> and export the slug as an environment variable: 


    export MY_DEVORG_SLUG="<your-slug-name>"


## Snap-in Manifest

The snap-in manifest is what the developers write to define a snap-in. The manifest has the following sections:


### Connections

Connections are specified in the manifest with the following  syntax:

    connections:
      - name: <connection name to use in the snap-in>
      - display_name: <display name for the connection>
        description: <detail about what this connection is used for>
        types: <array of enum specifying what all types of connections could be selected by end user for this connection>

      - name: <connection name to use in the snap-in>
        description: <detail about what this connection is used for>
        types: <array of enum specifying what all types of connections could be selected by end user for this connection>

List of supported types: [You can find list of supported types here](https://github.com/devrev/blubox-common/blob/main/knowledge/connections.go#L87-L103) with explanatory names

Example:

    connections:
      - name: github
        description: github token to be used to get PR details
        types:
          - devrev-github-pat
          - devrev-github-oauth

[Cellarman](https://github.com/devrev/cellarman) is the service that stores these secrets, and has the business logic to refresh tokens, when applicable. The list of currently supported connection types:

- Bitbucket OAuth2
- Clearbit token
- Datadog key
- Devrev personal access token
- Domain Verification
- GitHub OAuth2
- GitHub personal access token
- GitLab personal access token
- Google OAuth2
- GCP Service Account JSON
- Intercom App
- Sendgrid token
- Slack App
- Stripe token

If you need a connection to an external source in a form which is not in the [supported list](https://github.com/devrev/blubox-common/blob/771cb85241b6da6e84e67780068ddd1c4e9c8d17/knowledge/connections.go#L84C2-L97), you would need to add the logic to create it. Follow [these](https://www.notion.so/devrev/How-to-add-new-external-service-16e24a3125494de987a3118c602ad979) steps.


### Event sources

Event sources are specified in the manifest with the following syntax:

    event-sources:
      - name: <event-source name to use in the snap-in>
        description: <detail about this event-source>
        display_name: <name shown to the end-user>
        type: <enum specifying what type of the source should be created>
        config:
     <an object containing config specific to the event source>

      - name: <event-source name to use in the snap-in>
        description: <detail about this event-source>
        display_name: <name shown to the end-user>
        type: <enum specifying what type of the source should be created>

List of supported types: <https://github.com/devrev/blubox-common/blob/771cb85241b6da6e84e67780068ddd1c4e9c8d17/knowledge/event_sources.go#L238-L253> with explanatory names.

Alternatively, List of supported webhooks in Snap-ins:

<https://github.com/devrev/blubox-common/blob/main/registration/event.go#L323>

List of supported webhooks:

<https://github.com/devrev/notifications-client/blob/main/apiv2/webhook.proto#L64>

If a webhook is supported but not in the list of those supported in snap-ins it can be added by raising a PR like <https://github.com/devrev/blubox-common/pull/259>.

Example:

    event-sources:
      - name: devrev-webhook
        description: Event generated within DevRevcoming from GitHub
        display_name: Devrev webhook
        type: devrev-webhook
        config:
          event_types:
            - work_created

[Blubox](https://github.com/devrev/blubox) is the service that manages event sources. If you need an event source that is not supported, like Discord webhook, you can use the notion of a generic event-source.

A generic event source is basically a webhook URL and secret and developer-provided code on how to validate the events coming on the URL.

For e.g., let’s say you want to connect to a source that can publish events to a webhook URL, and it hashes the entire request payload with the shared secret and adds a HTTP header “X-SIGNATURE” with value as the hash. Then, you can provide the custom code (currently in [rego](https://www.openpolicyagent.org/docs/latest/policy-language/#what-is-rego)) to validate the payload with the same algorithm. you would also calculate the hash and verify with the value present in the header to avoid someone else tampering in between.

To create a generic event source in your manifest, you create an event source with type as flow-custom-webhook and config containing a key policy which contains the rego code.

The input to the policy is the following JSON:

    {
      "parameters": `policy.parameters` as an object.
      "request": {
        "body": JSON body of the HTTP request received on the webhook
        "headers": key-value (string) map of the request headers. Duplicate values for same `key` are overridden.
    Header keys are in CanonicalHeaderKey format (Golang default, done in Gateway itself). E.g. Content-Type, Accept-Encoding, etc.
        "body_raw": raw body (bytes) of the HTTP request as a base64 string.
      }
    }

 

The run policy must return an object \`output\`, which is of the following format:

    {
     "event": [optional] `JSON object` representing the event to emit. This is `input.request.body` in most cases.
          If it is not present (or null), then the event is not published.
     "event_key": [required (and not "") if `event` is non-empty] 
    `string` to represent the type of the event.
     E.g. file-created, pipeline-failed etc.
     This `event_key` is prefixed with 'custom:' and published to Blubox. So, snap-ins that want to use this event should use the `event_name` as `custom:event-key`.
     "response": [optional] {
     "status_code": [optional] `integer` HTTP status code to return to user. Only valid HTTP codes allowed.
                              Defaults to 200.
     "body": [optional] `string` or `JSON` for HTTP body to return to the client.
     "headers":[optional] `JSON` of type `map[string]string` to return in the HTTP response.
     }
    }

Example of a generic event source:

    event-sources:
     - name: aws-source
       type: flow-custom-webhook
       config:
         policy: |
           package rego
           signature := crypto.hmac.sha256(base64.decode(input.request.body_raw), input.parameters.secret)
           expected_header := sprintf("sha256=%v", [signature])
           signature_header_name := "X-Signature-256"
           status_code = 200 {
             expected_header == input.request.headers[signature_header_name]
           } else = 401 {
             true
           }
           output = {"event": event, "event_key": event_key} {
             expected_header == input.request.headers[signature_header_name]
             event := input.request.body
             event_key := sprintf("beanstalk.deployment.%v", [event.deployment_status])
           } else = {"response": response} {
             response := {"status_code": status_code}
           }
         parameters:
           secret: ${{connections.aws_token}}

The  `output = {"event": event, "event_key": event_key} `is where you would define a new event_type in the manifest.yaml. The event_key output here can be referred to in automations when the trigger is the generic event source.

Here, we create an event source with the name aws-source, and the policy validates that there should be a header \`X-Signature-256\` with value as sha256 of raw request bytes.


#### Timer-based event sources:

You can also create timer-based event sources which will send events based on an interval or a cron schedule. The following example has 2 event sources, the first one emits events daily at 12:00 am, and the second one emits events every 1 hour (3600 seconds). The event payload will contain JSON field metadata which is the metadata you specify in the config of the event source.

    - name: daily-timer-source
      description: Timer event source based on Cron expression
      display_name: Timer source
      type: timer-events
      config:
        cron: "0 0 * * *"
        metadata:
          event_key: daily_events

    - name: hourly-events
      description: Timer event source based on interval seconds
      display_name: Timer source
      type: timer-events
      config:
        interval_seconds: 3600
        metadata:
          event_key: hourly_events


### Globals

Globals are implemented today using per-object schemas, which is a customization term to store custom schemas in line with the object. Each global’s schema maps to a [FieldDescriptor](https://github.com/devrev/schemaregistry-client/blob/d5e05cabbc2a431b8db05edb00521c0515f4606d/api/composite.proto#L198).

The definition of globals look like this:

    globals:
      - name: <name of the global>

        description: <its description - what is it supposed to do>

        devrev_field_type: <type of the global>

        devrev_id_type: <If the field type is id, then what are the supported object types whose id this global can store>

        is_required: <Is this a required input?>

        default_value: <The default value for this global>

        ui:
            display_name: <Display name for the input field>

**NOTE**: List of supported globals: <https://github.com/devrev/schemaregistry/blob/a221b95d9b55783cd4209623b6a5a60bb1aeca70/internal/server/fragment_validation.go#L23>


### Tags

Definition of a tag is simple, and you need to pass just the name and description of the tag.

Example:

    tags:
      - name: github.branch.name
        description: Tag storing github branch name.


### Commands

In the manifest, you need to specify the name of the command, its namespace, the surfaces where it can show up such as comment discussions, a description which can show up on the UI, usage hints, and the function to be triggered when the command is invoked.

    commands:
      - name: summarize
        namespace: turing
        description: Summarizes the conversation
        surfaces:
          - surface: discussions
            object_types:
              - conversation
        usage_hint: "number of tokens to generate"
        function: generate_summary

For commands, the &lt;name, namespace> pair should be unique across the Org in which it is installed.


### Functions

In the manifest, all you need to tell is the name of the function, and its description, just like tags:

    functions:
      - name: create_work

        description: Function containing logic to create a DevRev work on GitHub new branch.

      - name: post_message

        description: Function containing logic to post a message on newly created work

For functions, you also need to provide the actual JS/TS code behind this function, for that, you would be providing an archive file, with the following structure.

    ├── create_work
    │   └── app
    │       └── index.ts
    └── post_message
        └── app
            └── index.ts

For each function, there should be a directory with the name same as the function name in the manifest. Under those directories, there should be an app folder, inside which would be your actual code files. Your code must export a JS class named \`App\` implementing the [\`AppInterface\` interface](https://github.com/devrev/flow/blob/cd4f9273007ad5b401f90c6f0f606f6936ec895c/internal/snapinbuild/overlay-fun-data/sdk/index.ts#L34).


### Automations

Automation is where you would link events from the event sources to your function. The definition of automations looks like this:

    automations:
      - name: <Name of the automation>
        source: <Name of the event source specified in the manifest from which the events coming in could trigger this automation>
        event_types:
          - <event from the source on which you need to run the code>
        function: <Name of the function specified in the manifest which should be run>

The supported event types from each source is documented [here](https://github.com/devrev/blubox-common/blob/771cb85241b6da6e84e67780068ddd1c4e9c8d17/knowledge/event_sources.go#L336). The documentation might be out of date, so refer to the team probably once.  
For custom event sources, whatever event key you emit from your policy, the event name would be custom: `<your event key>`.


## Create a snap-in


### Clone the example code repository

1. Create a new repository from the template repository : <https://github.com/devrev/devrev-snaps-typescript-template/> 

2. In the above repository, you can add functions at path **src/functions** where the folder name corresponds to the function name in your manifest file.

3. Each function you add will also need to be mentioned in **src/function-factory.ts .**

4. You can test your code by adding test events under **src/fixtures** similar to the example event provided. You can add keyring values to the event payload to test API calls as well.

5. You can also add dependencies on external packages in **package.json** under the “dependencies” key. These dependencies will be made available to your function at runtime and testing.

6. Once you are done with the testing, 

   1. Run \`npm run build && npm run package\` and ensure it succeeds.
   2. Ensure that **dist/** folder is created.
   3. you should see a build.tar.gz archive of your code and upload it as an artifact as earlier.


    developer@devrev:~/demo$ git clone git@github.com:devrev/devrev-snaps-typescript-template.git
    developer@devrev:~/demo$ cd devrev-snaps-typescript-template/
    .... add your functions...
    developer@devrev:~/demo/devrev-snaps-typescript-template$ npm run build && npm run package
    developer@devrev:~/demo/devrev-snaps-typescript-template$ ls build.tar.gz


### Create a snap-in package container

    developer@devrev:~/demo/devrev-snaps-typescript-template/e2e-snapin-multiple-functions$ devrev snap_in_package create-one --slug github --name Github  --description "snap in package for Github Integration" | jq .


### Create a snap-in version

    developer@devrev:~/demo/devrev-snaps-typescript-template/e2e-snapin-multiple-functions$ devrev snap_in_version create-one --manifest manifest.yaml --package don:integration:dvrv-us-1:devo/fOFb0IdZ:snap_in_package/5b55aae8-daa2-49e2-b8d2-8cb939a90ef0 --archive build.tar.gz | jq .

**NOTE: There is a limit on the number of snap-in-versions that could be created under a package. So, if you have an existing snap-in-version under the package, you would get an error like:** 

    {"debug_message":"cannot create a new snap_in_version under snap_in_package don:integration:dvrv-us-1:devo/fOFb0IdZ:snap_in_package/972696ef-32cf-4ec0-81da-5a4a7804fa91 because there is already a non-published snap_in_version under it","message":"Bad Request","type":"bad_request"}

**You can do a list for snap-in-versions under the package and then delete the previous one.**

    devrev snap_in_version list --package don:integration:dvrv-us-1:devo/fOFb0IdZ:snap_in_package/972696ef-32cf-4ec0-81da-5a4a7804fa91
    {"id":"don:integration:dvrv-us-1:devo/fOFb0IdZ:snap_in_package/972696ef-32cf-4ec0-81da-5a4a7804fa91:snap_in_version/52c058a9-7d68-4538-b70e-46efc7dfcd0d", ...... ,"state":"draft"}

    devrev snap_in_version delete-one don:integration:dvrv-us-1:devo/fOFb0IdZ:snap_in_package/972696ef-32cf-4ec0-81da-5a4a7804fa91:snap_in_version/52c058a9-7d68-4538-b70e-46efc7dfcd0d

That’s it! The snap-in package and version are now created.


## Install the snap-in

    developer@devrev:~/demo/devrev-snaps-typescript-template/e2e-snapin-multiple-functions$ devrev snap_in draft --snap_in_version don:integration:dvrv-us-1:devo/fOFb0IdZ:snap_in_package/5b55aae8-daa2-49e2-b8d2-8cb939a90ef0:snap_in_version/723ed6f8-6f27-4f71-9d6f-533887a49773 | jq .sn 


## Configure the snap-in

// **NOTE: Steps below could be done from the UI also. Just go to your devorg > Settings > Snap-ins > (You should see a snap-in with name = whatever name you gave in your snap-in-package). And you can provide connection mappings, and input values from the UI.**


### Update the snap-in draft state with the specific inputs

    developer@devrev:~/demo/devrev-snaps-typescript-template/e2e-snapin-multiple-functions$ devrev snap_in update don:integration:dvrv-us-1:devo/fOFb0IdZ:snap_in/092dac20-f8b5-46ba-92a0-8ff59a21cf74
    Please provide mapping for connections: 
    ✔ ghc3
    ✔ my_personal_pat
    Please provide global inputs values: 
    obj__globals_part_id (type = id): don:core:dvrv-us-1:devo/fOFb0IdZ:product/1/1█
    ✔ obj__globals_part_id (type = id): don:core:dvrv-us-1:devo/fOFb0IdZ:product/1█
    obj__globals_message (type = tokens): Hurray


### Deploy the configured snap-in

    developer@devrev:~/demo/devrev-snaps-typescript-template/e2e-snapin-multiple-functions$ devrev snap_in deploy don:integration:dvrv-us-1:devo/fOFb0IdZ:snap_in/092dac20-f8b5-46ba-92a0-8ff59a21cf74


# Debugging Snap-in


## Debugging CLI calls

1. Go to Datadog Logs - <https://app.datadoghq.com/logs?query=service%3Aflow%20%40dev_oid%3A%22don%3Aidentity%3Advrv-us-1%3Adevo%2F787%22&cols=host%2Cservice&index=&messageDisplay=inline&stream_sort=time%2Cdesc&viz=stream&from_ts=1674542895552&to_ts=1674802095552&live=true> 
2. Change the DevOrg in logs filter to your DevOrg ID. 


## Fetching logs for Snap-in

You can use DevRev CLI to fetch logs for your snap-ins. This includes both, build logs as well as runtime logs. The following commands can be helpful. Have a look at them and construct your own filters/commands:

- Fetching logs for all snap-in packages/versions  in your DevOrg.

|                                                                    |
| ------------------------------------------------------------------ |
| $ devrev snap_in_package logs --after "2023-05-05T00:00:00Z" \| jq |

- Fetching logs between two timestamps and using cursor for pagination. Opens response in VS code for easier accessibility. By default, not specifying --before lists all logs till current timestamp in descending order (latest logs at top):

|                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------- |
| $ devrev snap_in_package logs --after "2023-04-15T10:24:17Z" --before "2023-04-30T00:00:00Z" --cursor cursor_from_previous_page \| jq \| code - |

- Fetch logs for a specific snap-in-package (and open in VS code):

|                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| devrev snap_in_package logs --after "2023-05-05T00:00:00Z"  --filters '{"snap_in_package": {"values": \["don:integration:dvrv-us-1:devo/787:snap_in_package/abcdef"]}}' \| jq \| code - |

- Fetch logs containing the text "level" but exclude logs with level "info":

|                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| devrev snap_in_package logs --after "2023-05-05T00:00:00Z" --query "failed" --filters '{"level": {"values": \["info"], "exclude": true}}' \| jq \| code - |

The fields you see in the JSON response are filterable. For eg., to filter only for build logs (i.e. omit the lambda execution logs) of a snap-in-version, you can run the command:

|                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| devrev snap_in_package logs --after "2023-05-05T00:00:00Z"  --filters '{"snap_in_version": {"values": \["don:integration:dvrv-us-1:devo/787:snap_in_package/abcdef:snap_in_version/abcdef"]}, "process":{"values": \["build"]}}' \| jq \| code - |

Similarly, you can filter only for execution logs by filtering for process = function

- Once you've constructed the appropriate filters, you can view the logs in a more user-friendly manner using the following command. Note that the part before jq can be customized according to your filters:

|                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| devrev snap_in_package logs --after "2023-05-05T00:00:00Z"  --filters '{}'  \| jq -r '\["total", .log_summary.total.value, "next_cursor", .next_cursor], (.logs\[] \| \[.level,.timestamp,.msg]) \| @tsv' \| code - |

You can look at the underlying Gateway API over [here](https://api-docs.dev-init.devrev-eng.ai/internal/automation/). The endpoint is GET /internal/snap-in-packages.logs.fetch.

Note: This is available only in DEV right now. We are working on bringing this to PROD.


## Debugging Lambda directly using Cloudwatch (available only to internal engineers).

Manage Lambda using AWS Management console:

1. Log in to AWS using <https://d-9067645937.awsapps.com/start#/> 
2. Choose the **Dev** account from the AWS Accounts list and click on the **Management console** link for **PowerUserAccess**
3. Run the command devrev snap-in-versions show "id_of_snap_in_version" 
4. From the above command, extract the snap-in-function ID of your lambda. Suppose it is  don:integration:dvrv-us-1:devo/0:snap_in_function/abcdef
5. Go to the **Lambda** page and filter the list by Lambda name “**snap-in-function-abdef**” or description of your function
6. When finding your Lambda you can manage it on a Lambda function details page (documentation on Lambda management is available at <https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html>)


## Connections

Make sure you marked the connection as “visible to DevOrg” when creating the connection, otherwise your connection will not show up when installing a Snap-in.


## DevRev Conversations

To create a new conversation for the DevOrg follow these steps: 

1. In the DevRev WebApp go to ‘Support’ **➝** ‘Inbox’
2. Use the filters to create a vista with no conversations. For e.g. Choose \`Created Date\` such that there were no conversations in that time period.
3. Click on the ‘Try out PLuG widget’ button that appears on the screen.
4. In the new window, add your PLuG App token from your Settings page.
5. Set your name and email address and ‘Submit’
6. Use the PLuG widget to create new conversations.


## Adding your flow code to dev

To upload your code folder to marketplace-items follow these steps:

1. Clone the marketplace-items repository.

2. Navigate inside the ‘dev’ folder inside the root directory.

3. Create your own folder inside this dev folder with the following components:

   1. ‘artifacts’ folder: This folder contains the ‘template.yaml’ file and the icon for the flow.
   2. ‘tests’ folder: This folder contains the tests for your flow.
   3. description.md: This contains basic descriptive steps about your flow and how  to install and use it.
   4. metadata.yaml: This contains basic product information in yaml code.

4. Create a PR for these changes.

**NOTE**: description.md and some fields in metadata.yaml needs to be populated by the Product Team.

**NOTE**: Add Ben Colborn as PR reviewer for content review.

Sample PR link: <https://github.com/devrev/marketplace-items/pull/201>


## Coding tips

1. If you are using async functions, remember to use await while calling them in your snap-in function code.
2. If the promise returned by the Run function is rejected, the snap-in will retry itself.


## Resources

1. API documentation:  
   <https://devrev.ai/docs/apis/getting-started> 
2. Webhooks documentation:  
   <https://devrev.ai/docs/webhooks/getting-started> 
3. Further Reading: <https://docs.google.com/document/d/1bIDVirtpE53oru7f4A6DLtOaZoCXB-AamkCBuxV8tp4/edit>
4. DevRev webhook event schema (needs dev VPN): <https://api-docs.dev-init.devrev-eng.ai/internal/#/schemas/webhook-event-request>


# \[WIP] Development using Template Repository


# Changelog: Earlier approach of writing function code was not developer-friendly as it relied on 


# defining the functions inside an arbitrary folder structure. There was no easy way to test it locally and leverage the existing node.js development ecosystem. 

We are now introducing a template repository with predefined folder structure, npm integration, support for local testing, and installing external packages. 

Steps to use the template repository:

7. Ensure the feature is enabled for your dev org by changing the feature flag here : <https://github.com/devrev/archon-policy/blob/main/policies/workflow_engine.rego> Feature flag name : build_functions_from_template

8. Create a new repository from the template repository : <https://github.com/devrev/devrev-snaps-typescript-template/> 

9. In the above repository, you can add functions at path **src/functions** where the folder name corresponds to the function name in your manifest file.

10. Each function you add will also need to be mentioned in **src/function-factory.ts .**

11. You can test your code by adding test events under **src/fixtures** similar to the example event provided. You can add keyring values to the event payload to test API calls as well.

12. You can also add dependencies on external packages in **package.json** under the “dependencies” key. These dependencies will be made available to your function at runtime and testing.

13. Once you are done with the testing, 

    1. Run \`npm run build && npm run package\` and ensure it succeeds.
    2. Ensure that **dist/** folder is created.
    3. you should see a build.tar.gz archive of your code and upload it as an artifact as earlier.


# \[WIP] Testing marketplace integration

Once you have finalized your snap-in, you can test it end-to-end by publishing it to your private marketplace and installing the snap-in from there. To do so:

// TODO: [Luka Košenina](mailto:luka.kosenina@devrev.ai)

