##
# Basic configuration of a FTF site
##

config {
	# Remove the admin panel
	admPanel = 0

	# Prepend all relative links with this string. 
	absRefPrefix = {$domain}

	# Make sure links only include each parameter once
	uniqueLinkVars = 1

	# Always UTF-8
	metaCharset = utf-8

	# TYPO3 will output cache-control headers to the client
	sendCacheHeaders = 1
	sendCacheHeaders_onlyWhenLoginDeniedInBranch = 1

	# Enable RealURL and disable simulateStaticDocuments
	tx_realurl_enable = 1
	simulateStaticDocuments = 0

	# Notification email
	notification_email_urlmode = all
	notification_email_encoding = quoted-printable

	# Nice HTML output
	doctype = html5
	xmlprologue = none
	removeDefaultJS = 1
	removeDefaultCss = 0
	inlineStyle2TempFile = 1
	meaningfulTempFilePrefix = 1
	disablePrefixComment = 1

	# Compress and concatenate CSS/JS
	#compressCss = 1
	#concatenateCss = 1
	#compressJs = 1
	#concatenateJs = 1
	moveJsFromHeaderToFooter = 1

	# Hyperlink targets
	intTarget = _self
	extTarget = _blank

	# Disable TYPO3 stat
	stat = 0

	# Localisation
	language = dk
	language_alt = da
	locale_all = da_DK.UTF-8
	htmlTag_dir = ltr
	htmlTag_langKey = da

	# Indexing
	index_enable = 0
	headerComment = ✯✯✯ FTF ✯✯✯
	typolinkCheckRootline = 1
}