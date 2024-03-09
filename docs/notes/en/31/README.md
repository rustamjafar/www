20240302202538

# bash: subshell

small reminder for myself about running shell scripts

## current shell

`. <script>`

this one above runs script in current shell, thus:

* all the local variables of current shell are available to `<script>`.
the `.` is interchangable w/ `source`.
* exported variables from `<script>` are also available to current shell.

## subshell

`./<script>`

this one creates subshell for `<script>` and then executes it in there.
